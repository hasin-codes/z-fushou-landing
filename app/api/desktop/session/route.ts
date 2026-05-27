import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { SignJWT } from "jose"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

export const runtime = "nodejs"

export async function POST() {
  const { userId } = await auth()

  console.log("[SESSION] POST request — userId:", userId)

  if (!userId) {
    console.log("[SESSION] REJECTED: No userId")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await currentUser()
  const email = user?.emailAddresses?.[0]?.emailAddress ?? ""
  const username = user?.username ?? ""

  console.log("[SESSION] User — email:", email, "username:", username)

  const { data: allowRow, error: allowError } = await supabaseAdmin
    .from("allowed_users")
    .select("allowed, role")
    .eq("clerk_user_id", userId)
    .maybeSingle()

  console.log("[SESSION] Allowlist lookup — data:", allowRow, "error:", allowError)

  if (allowError) {
    return NextResponse.json({ error: allowError.message }, { status: 500 })
  }

  if (!allowRow?.allowed) {
    console.log("[SESSION] REJECTED: User not allowed")
    return NextResponse.json({ error: "Not allowed" }, { status: 403 })
  }

  const sessionId = crypto.randomUUID()

  console.log("[SESSION] Generated sessionId:", sessionId)

  const insertPayload = {
    clerk_user_id: userId,
    device_name: "browser_to_desktop",
    platform: "desktop",
    session_token: sessionId,
    revoked: false,
    created_at: new Date().toISOString(),
    last_seen: new Date().toISOString(),
    expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
  }

  console.log("[SESSION] Inserting into desktop_sessions:", JSON.stringify(insertPayload))

  const { error: insertError } = await supabaseAdmin
    .from("desktop_sessions")
    .insert(insertPayload)

  if (insertError) {
    console.error("[SESSION] INSERT ERROR:", insertError)
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  console.log("[SESSION] Insert successful — verifying row exists...")

  // Immediately query back to confirm persistence
  const { data: verifyRow, error: verifyError } = await supabaseAdmin
    .from("desktop_sessions")
    .select("session_token, revoked")
    .eq("session_token", sessionId)
    .maybeSingle()

  console.log("[SESSION] Readback — data:", verifyRow, "error:", verifyError)

  if (!verifyRow) {
    console.error("[SESSION] CRITICAL: Row not found immediately after insert!")
  }

  const secret = new TextEncoder().encode(process.env.DESKTOP_JWT_SECRET!)

  const jwtPayload = {
    email,
    username,
    role: allowRow.role,
    sid: sessionId,
  }

  console.log("[SESSION] JWT payload:", JSON.stringify(jwtPayload))

  const token = await new SignJWT(jwtPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret)

  console.log("[SESSION] Token generated — length:", token.length)
  console.log("[SESSION] COMPLETE — returning token to client")

  return NextResponse.json({ token })
}
