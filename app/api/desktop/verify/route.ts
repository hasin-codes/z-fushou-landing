import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

export const runtime = "nodejs"

const ALLOWED_ORIGINS = [
  "https://z-fushou.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:4173",
]

// Electron standalone server runs on 127.0.0.1 with a random port
const ELECTRON_ORIGIN_RE = /^http:\/\/127\.0\.0\.1:\d+$/

function isOriginAllowed(origin: string | null | undefined): boolean {
  if (!origin) return false
  return ALLOWED_ORIGINS.includes(origin) || ELECTRON_ORIGIN_RE.test(origin)
}

function corsHeaders(origin?: string | null): Record<string, string> {
  const allowed = isOriginAllowed(origin)
    ? origin!
    : ALLOWED_ORIGINS[0]

  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400",
  }
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin")
  console.log("[VERIFY] OPTIONS preflight from origin:", origin)

  return NextResponse.json({}, { headers: corsHeaders(origin) })
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin")
  const headers = corsHeaders(origin)

  try {
    const body = await req.json()
    const { token } = body

    console.log("[VERIFY] POST request from origin:", origin)
    console.log("[VERIFY] Token present:", !!token)
    console.log("[VERIFY] Token length:", token?.length ?? 0)

    if (!token) {
      console.log("[VERIFY] REJECTED: Missing token")
      return NextResponse.json(
        { error: "Missing token" },
        { status: 400, headers }
      )
    }

    const secret = new TextEncoder().encode(process.env.DESKTOP_JWT_SECRET!)
    const { payload } = await jwtVerify(token, secret)

    const sessionId = payload.sid as string | undefined
    const clerkUserId = payload.sub as string | undefined

    console.log("[VERIFY] JWT decoded — sid:", sessionId, "sub:", clerkUserId)

    if (!sessionId || !clerkUserId) {
      console.log("[VERIFY] REJECTED: Invalid token payload")
      return NextResponse.json(
        { error: "Invalid token" },
        { status: 401, headers }
      )
    }

    console.log("[VERIFY] Querying desktop_sessions where session_token =", sessionId)

    const { data: sessionRow, error: dbError } = await supabaseAdmin
      .from("desktop_sessions")
      .select("session_token, revoked, clerk_user_id")
      .eq("session_token", sessionId)
      .maybeSingle()

    console.log("[VERIFY] Supabase result — data:", sessionRow, "error:", dbError)

    if (dbError) {
      console.error("[VERIFY] Supabase query error:", dbError)
      return NextResponse.json(
        { error: "Database error", detail: dbError.message },
        { status: 500, headers }
      )
    }

    if (!sessionRow) {
      console.log("[VERIFY] REJECTED: No row found for session_token:", sessionId)
      // Try a broader query to see if ANY sessions exist for this user
      const { data: userSessions } = await supabaseAdmin
        .from("desktop_sessions")
        .select("session_token, revoked")
        .eq("clerk_user_id", clerkUserId)
        .limit(5)
      console.log("[VERIFY] User's other sessions:", userSessions)
      return NextResponse.json(
        { error: "Session not found", sid: sessionId },
        { status: 401, headers }
      )
    }

    if (sessionRow.revoked) {
      console.log("[VERIFY] REJECTED: Session is revoked — session_token:", sessionId)
      return NextResponse.json(
        { error: "Session revoked" },
        { status: 401, headers }
      )
    }

    // --- Allowlist check (defense in depth) ---
    const { data: allowedUser, error: allowError } = await supabaseAdmin
      .from("allowed_users")
      .select("allowed")
      .eq("clerk_user_id", payload.sub)
      .single()

    if (allowError) {
      console.error("[VERIFY] Allowlist query error:", allowError)
      return NextResponse.json(
        { error: "Database error", detail: allowError.message },
        { status: 500, headers }
      )
    }

    if (!allowedUser?.allowed) {
      console.log("[VERIFY] REJECTED: User removed from allowlist — clerk_user_id:", clerkUserId)
      return NextResponse.json(
        { ok: false, error: "Access revoked" },
        { status: 401, headers }
      )
    }

    // --- Update last_seen (audit trail) ---
    await supabaseAdmin
      .from("desktop_sessions")
      .update({ last_seen: new Date().toISOString() })
      .eq("session_token", sessionId)

    console.log("[VERIFY] SUCCESS — clerkUserId:", clerkUserId, "session_token:", sessionId)
    return NextResponse.json(
      { ok: true, clerkUserId },
      { headers }
    )
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err)
    console.error("[VERIFY] ERROR:", detail)
    return NextResponse.json(
      { error: "Invalid token", detail },
      { status: 401, headers }
    )
  }
}
