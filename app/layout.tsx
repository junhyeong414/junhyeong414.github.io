import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "반준형 | Materials & Process Engineering",
  description:
    "표면·계면 공학, 나노소재, 반도체 소재, 전기화학 시스템을 연결하는 반준형의 소재·공정 엔지니어링 포트폴리오입니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={GeistSans.className} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
