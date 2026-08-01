import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jongsolee.github.io"),
  title: {
    default: "Jongsolee Pages",
    template: "%s · Jongsolee Pages",
  },
  description: "필요할 때 만들고, 꺼내 쓰는 개인 웹페이지 모음",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

