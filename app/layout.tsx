import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
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
        className={`${plusJakartaSans.variable} h-full antialiased`}
      >
        <body className={`${plusJakartaSans.variable} min-h-full flex flex-col`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
