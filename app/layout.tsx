import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "谭美玲｜个人简历",
  description: "谭美玲的个人简历网站——武汉大学硕士研究生，专注 AI 产品运营、内容增长与用户体验。",
  applicationName: "谭美玲｜个人简历",
  authors: [{ name: "谭美玲" }],
  keywords: ["谭美玲", "AI 产品运营", "内容增长", "武汉大学", "个人作品集"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "谭美玲｜个人简历",
    description: "AI 产品运营、内容增长与用户体验作品集。",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
