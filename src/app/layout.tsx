import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Website, getWebsiteName } from "@/lib/website";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}

export const metadata: Metadata = {
  title: `摸鱼-热搜聚合`,
  description: `热搜聚合,热搜,热榜,历史热搜,历史热榜,热搜历史记录,${Object.values(
    Website
  )
    .map((item) => getWebsiteName(item))
    .join(",")}`,
  verification: {
    google: "tN1gZzl3jH1LGA9kLLA8-6Ke8oWiycK1RelqJ2X9jmQ",
  },
};
