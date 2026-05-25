"use client"

import { useState } from "react"

export default function DesktopLoginPage() {
  const [loading, setLoading] = useState(false)

  const connectDesktop = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/desktop/session", {
        method: "POST",
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.error || "Login failed")
        return
      }

      const appScheme = process.env.NEXT_PUBLIC_APP_DEEP_LINK || "myapp"
      window.location.href = `${appScheme}://auth?token=${encodeURIComponent(data.token)}`
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Connect Desktop App</h1>
      <button onClick={connectDesktop} disabled={loading}>
        {loading ? "Connecting..." : "Open Desktop App"}
      </button>
    </main>
  )
}
