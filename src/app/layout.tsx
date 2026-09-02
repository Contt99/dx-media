import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://contt99.github.io/dx-media/"),
  title: "DX MEDIA — Digital X · 链接无限",
  description:
    "DX MEDIA 专注达人营销、媒介投放、内容营销与品牌传播，连接品牌、内容与真实消费人群。",
  keywords: [
    "DX MEDIA",
    "达人营销",
    "媒介投放",
    "内容营销",
    "品牌传播",
  ],
  openGraph: {
    title: "DX MEDIA — Digital X · 链接无限",
    description: "Independent Creative & Media Partner，链接品牌、内容与真实消费人群。",
    type: "website",
    locale: "zh_CN",
    url: "https://contt99.github.io/dx-media/",
    images: [
      {
        url: "https://contt99.github.io/dx-media/og.png",
        width: 1200,
        height: 630,
        alt: "DX MEDIA — Digital X · 链接无限",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DX MEDIA — Digital X · 链接无限",
    description: "Independent Creative & Media Partner，链接品牌、内容与真实消费人群。",
    images: ["https://contt99.github.io/dx-media/og.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
