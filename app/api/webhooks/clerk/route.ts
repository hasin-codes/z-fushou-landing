import { NextRequest, NextResponse } from "next/server"
import { Webhook } from "svix"
import { supabaseAdmin } from "@/lib/supabaseAdmin"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const payload = await req.text()

  const svix_id = req.headers.get("svix-id")
  const svix_timestamp = req.headers.get("svix-timestamp")
  const svix_signature = req.headers.get("svix-signature")

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json({ error: "Missing Svix headers" }, { status: 400 })
  }

  const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET
  if (!secret) {
    return NextResponse.json({ error: "Missing webhook secret" }, { status: 500 })
  }

  const wh = new Webhook(secret)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let evt: any
  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    })
  } catch (err) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (evt.type === "user.created" || evt.type === "user.updated") {
    const user = evt.data
    const email = user.email_addresses?.[0]?.email_address ?? ""
    const clerkUserId = user.id

    const { error } = await supabaseAdmin.from("allowed_users").upsert(
      {
        clerk_user_id: clerkUserId,
        email,
        allowed: false,
        role: "viewer",
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "clerk_user_id",
      }
    )

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }

  if (evt.type === "user.deleted") {
    const clerkUserId = evt.data.id

    const { error } = await supabaseAdmin
      .from("allowed_users")
      .update({ allowed: false, updated_at: new Date().toISOString() })
      .eq("clerk_user_id", clerkUserId)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }

  return NextResponse.json({ ok: true })
}
