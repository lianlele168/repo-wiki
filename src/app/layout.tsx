import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://repo.robloxwikihub.com"),
  title: {
    default: "R.E.P.O. Wiki — Scrap Durability Calculator & Quota Guide 2026",
    template: "%s | R.E.P.O. Wiki",
  },
  description: "Ultimate R.E.P.O. (Retrieve, Extract & Profit Operation) database. Calculate scrap item impact decay, level quota targets, gear upgrade ROI, monster sound perception, and console commands.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
