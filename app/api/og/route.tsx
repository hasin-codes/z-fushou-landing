import { ImageResponse } from "next/og"

export const runtime = "edge"

const geistFont = fetch(
  "https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-sans/GeistSans-Medium.woff2"
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  const fontData = await geistFont
  const url = new URL(req.url)
  const mode = (url.searchParams.get("mode") || "dark") as "dark" | "light"
  const isDark = mode === "dark"

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 144px",
          backgroundColor: isDark ? "#171717" : "#fafafa",
          color: isDark ? "#ffffff" : "#000000",
        }}
      >
        {/* Main card */}
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 56,
            paddingBottom: 48,
            paddingLeft: 48,
            paddingRight: 48,
            backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
            borderRadius: 16,
            border: `1px solid ${isDark ? "#262626" : "#e5e5e5"}`,
            boxShadow: isDark
              ? "0 25px 50px -12px rgba(0,0,0,0.5)"
              : "0 25px 50px -12px rgba(0,0,0,0.08)",
          }}
        >
          {/* Logo + App Name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              viewBox="0 0 18 18"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stopColor="#9B99FE" />
                  <stop offset="1" stopColor="#2BC8B7" />
                </linearGradient>
              </defs>
              <path
                d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                fill="url(#logo-gradient)"
              />
            </svg>
            <span
              style={{
                marginLeft: 20,
                fontSize: 48,
                fontWeight: 500,
                letterSpacing: "-0.03em",
              }}
            >
              Z Fushou
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              marginTop: 40,
              textAlign: "center",
              fontSize: 24,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
              color: isDark
                ? "rgba(163,163,163,0.8)"
                : "rgba(115,115,115,0.9)",
              maxWidth: 560,
            }}
          >
            Turn your voice into ready-to-use text directly on your desktop.
          </p>
        </div>

        {/* Bottom label */}
        <p
          style={{
            marginTop: 32,
            textAlign: "center",
            fontSize: 16,
            color: isDark
              ? "rgba(163,163,163,0.6)"
              : "rgba(115,115,115,0.7)",
          }}
        >
          Voice to Text Desktop App
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist Sans",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  )
}
