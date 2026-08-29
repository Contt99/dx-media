import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
