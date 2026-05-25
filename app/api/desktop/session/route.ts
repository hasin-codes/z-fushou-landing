import { auth, currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import { SignJWT } from "jose"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

export const runtime = "nodejs"

export async function POST() {
  const { userId } = auth()

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await currentUser()
  const email = user?.emailAddresses?.[0]?.emailAddress ?? ""
  const username = user?.username ?? ""

  const { data: allowRow, error: allowError } = await supabaseAdmin
    .from("allowed_users")
    .select("allowed, role")
    .eq("clerk_user_id", userId)
    .maybeSingle()

  if (allowError) {
    return NextResponse.json({ error: allowError.message }, { status: 500 })
  }

  if (!allowRow?.allowed) {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 })
  }

  const sessionId = crypto.randomUUID()

  const { error: insertError } = await supabaseAdmin.from("desktop_sessions").insert({
    clerk_user_id: userId,
    device_name: "browser_to_desktop",
    platform: "desktop",
    session_token: sessionId,
    revoked: false,
    created_at: new Date().toISOString(),
    last_seen: new Date().toISOString(),
  })

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  const secret = new TextEncoder().encode(process.env.DESKTOP_JWT_SECRET!)

  const token = await new SignJWT({
    email,
    username,
    role: allowRow.role,
    sid: sessionId,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret)

  return NextResponse.json({ token })
}
