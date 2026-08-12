import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "谭美玲｜个人简历",
  description: "谭美玲的个人简历网站——武汉大学硕士研究生，专注 AI 产品运营、内容增长与用户体验。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/avatar-emoji.png",
    shortcut: "/avatar-emoji.png",
    apple: "/avatar-emoji.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
