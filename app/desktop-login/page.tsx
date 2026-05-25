"use client"

import { useState } from "react"
import { useAuth, SignInButton } from "@clerk/nextjs"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

export default function DesktopLoginPage() {
  const { isSignedIn, isLoaded } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const connectDesktop = async () => {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/desktop/session", {
        method: "POST",
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Login failed")
        return
      }

      const appScheme = process.env.NEXT_PUBLIC_APP_DEEP_LINK || "z-fushou"
      window.location.href = `${appScheme}://auth?token=${encodeURIComponent(data.token)}`
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <Logo className="h-8 w-auto" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-foreground text-2xl font-semibold tracking-tight">
            Connect to Desktop
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in with your account to link the Z Fushou desktop app.
          </p>
        </div>

        {/* Content area */}
        <div className="bg-card border-border rounded-xl border p-8 shadow-lg">
          {!isLoaded ? (
            <div className="flex items-center justify-center py-4">
              <div className="border-primary h-6 w-6 animate-spin rounded-full border-2 border-t-transparent" />
            </div>
          ) : !isSignedIn ? (
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                You need to sign in first before connecting the desktop app.
              </p>
              <SignInButton mode="redirect" forceRedirectUrl="/desktop-login">
                <Button className="w-full cursor-pointer" size="lg">
                  Sign In to Continue
                </Button>
              </SignInButton>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="text-primary h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground text-sm">
                Click below to open the Z Fushou desktop app with your account.
              </p>
              <Button
                onClick={connectDesktop}
                disabled={loading}
                className="w-full cursor-pointer"
                size="lg"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
                    Connecting...
                  </span>
                ) : (
                  "Open Desktop App"
                )}
              </Button>
            </div>
          )}

          {/* Error message */}
          {error && (
            <p className="mt-4 text-sm text-red-500">{error}</p>
          )}
        </div>

        {/* Footer note */}
        <p className="text-muted-foreground/60 text-xs">
          Make sure the Z Fushou desktop app is installed before connecting.
        </p>
      </div>
    </div>
  )
}
