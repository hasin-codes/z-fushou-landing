import { ImageResponse } from "next/og"

export const runtime = "edge"

const plusJakartaFont = fetch(
  "https://fonts.gstatic.com/s/plusjakartasans/v8/LDIoaomQNQcsA88c7O9yZ4KMCoOg4KoN5CxlhjMJMcA.ttf"
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  const fontData = await plusJakartaFont
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
              viewBox="0 0 1254 1254"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M429.809 916.18C412.272 905.801 396.154 893.192 381.859 878.67C336.019 832.37 310.289 775.84 298.799 712.43C284.109 631.43 293.289 552.81 325.719 477.21C349.579 421.55 385.469 375.09 435.719 340.54C485.969 305.99 541.449 287.95 602.659 288C690.739 288.093 778.822 288.093 866.909 288C936.769 288 983.519 361.76 953.449 424.89C938.449 456.33 914.209 476.44 879.319 482.49C875.369 483.099 871.375 483.373 867.379 483.31C784.119 483.31 700.829 481.77 617.619 483.72C531.999 485.72 462.919 521.81 415.989 594.72C384.439 643.72 373.369 698.58 377.319 756.5C381.109 812.64 397.329 864.82 427.659 912.37C428.439 913.63 429.109 914.92 429.809 916.18Z"
                fill="#FBFCFA"
              />
              <path
                d="M429.809 916.18C412.272 905.801 396.154 893.192 381.859 878.67C336.019 832.37 310.289 775.84 298.799 712.43C284.109 631.43 293.289 552.81 325.719 477.21C349.579 421.55 385.469 375.09 435.719 340.54C485.969 305.99 541.449 287.95 602.659 288C690.739 288.093 778.822 288.093 866.909 288C936.769 288 983.519 361.76 953.449 424.89C938.449 456.33 914.209 476.44 879.319 482.49C875.369 483.099 871.375 483.373 867.379 483.31C784.119 483.31 700.829 481.77 617.619 483.72C531.999 485.72 462.919 521.81 415.989 594.72C384.439 643.72 373.369 698.58 377.319 756.5C381.109 812.64 397.329 864.82 427.659 912.37C428.439 913.63 429.109 914.92 429.809 916.18Z"
                fill="url(#logo-gradient)"
              />
              <path
                d="M604.628 965.37C594.248 962.07 583.708 959.18 573.498 955.37C531.498 939.9 496.018 915.49 470.848 877.84C451.038 848.22 440.188 815.28 436.758 779.84C432.994 742.565 438.811 704.947 453.658 670.55C484.928 597.37 559.108 548.16 638.618 548.18C684.408 548.18 730.188 548.33 775.978 548.12C827.338 547.9 871.678 586.76 877.748 637.68C884.088 690.85 847.488 741.68 795.198 752.01C789.804 753.047 784.322 753.563 778.828 753.55C734.828 753.67 690.898 754.44 646.968 753.37C597.518 752.16 560.378 789.49 551.698 831.59C542.328 877.09 557.698 915.42 588.488 948.51C593.658 954.06 599.558 958.94 605.108 964.13L604.628 965.37Z"
                fill="#FBFCFA"
              />
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="942.508"
                  y1="288"
                  x2="314.331"
                  y2="918.285"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BDF750" />
                  <stop offset="0.8" stopColor="#8DF525" />
                  <stop offset="1" stopColor="#72D013" />
                </linearGradient>
              </defs>
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
            Turns chaotic conversations into actionable intelligence.
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
          Conversation Intelligence
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: fontData,
          style: "normal",
          weight: 500,
        },
      ],
    }
  )
}
