import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Z Fushou - Voice to Text Desktop App",
  description: "Turn your voice into ready-to-use text directly on your desktop.",
  openGraph: {
    title: "Z Fushou - Voice to Text Desktop App",
    description: "Turn your voice into ready-to-use text directly on your desktop.",
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Z Fushou - Voice to Text Desktop App",
    description: "Turn your voice into ready-to-use text directly on your desktop.",
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
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
