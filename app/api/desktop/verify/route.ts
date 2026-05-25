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

    const { data: sessionRow } = await supabaseAdmin
      .from("desktop_sessions")
      .select("revoked")
      .eq("session_token", sessionId)
      .maybeSingle()

    if (!sessionRow || sessionRow.revoked) {
      console.log("[VERIFY] REJECTED: Session not found or revoked")
      return NextResponse.json(
        { error: "Session revoked" },
        { status: 401, headers }
      )
    }

    console.log("[VERIFY] SUCCESS — clerkUserId:", clerkUserId)
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
