import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zfushou.hasinraiyan.me"),
  title: "ZFushou - Conversation Intelligence",
  description: "Turns chaotic conversations into actionable intelligence. Detects issues, frustration, and product pain in real time.",
  openGraph: {
    title: "ZFushou - Conversation Intelligence",
    description: "Turns chaotic conversations into actionable intelligence. Detects issues, frustration, and product pain in real time.",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZFushou - Conversation Intelligence",
    description: "Turns chaotic conversations into actionable intelligence. Detects issues, frustration, and product pain in real time.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${plusJakartaSans.variable} h-full antialiased`}
      >
        <body className={`${plusJakartaSans.variable} min-h-full flex flex-col`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
