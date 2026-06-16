import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "正载科技 | PTFE 精密管材与斑马热缩管",
  description: "南京正载科技有限公司专注 PTFE 斑马热缩管、精密管材、热缩管、可撕裂管材及定制化服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
