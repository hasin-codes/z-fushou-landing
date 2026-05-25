import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const { token } = await req.json()

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 })
  }

  try {
    const secret = new TextEncoder().encode(process.env.DESKTOP_JWT_SECRET!)
    const { payload } = await jwtVerify(token, secret)

    const sessionId = payload.sid as string | undefined
    const clerkUserId = payload.sub as string | undefined

    if (!sessionId || !clerkUserId) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const { data: sessionRow } = await supabaseAdmin
      .from("desktop_sessions")
      .select("revoked")
      .eq("session_token", sessionId)
      .maybeSingle()

    if (!sessionRow || sessionRow.revoked) {
      return NextResponse.json({ error: "Session revoked" }, { status: 401 })
    }

    return NextResponse.json({
      ok: true,
      clerkUserId,
    })
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
