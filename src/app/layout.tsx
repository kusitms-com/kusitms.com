import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Footer, Header } from "@/components/shared";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Suspense } from "react";
import PageViewTracker from "@/components/shared/analytics/PageViewTracker";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "큐시즘(KUSITMS) - 한국대학생IT경영학회",
  description: "비전을 가지고 함께 성장하는 학회, 큐시즘의 공식 홈페이지입니다.",
  applicationName: "큐시즘",
  generator: "Next.js",
  keywords: ["KUSITMS", "큐시즘","한국대학생IT경영학회", "학회", "공식 홈페이지"],
  openGraph: {
    type: "website",
    title: "큐시즘(KUSITMS) - 한국대학생IT경영학회",
    description: "비전을 가지고 함께 성장하는 학회, 큐시즘의 공식 홈페이지입니다.",
    url: "https://www.kusitms.com",
    images: [
      {
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/meetup/OG/456ed518-7489-4106-9d33-94c491ef358732__OG_.png",
        alt: "KUSITMS 홈페이지 배너",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon/16_16_Favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon/32_32_Favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon/48_48_Favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon/180_180_Favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon/favicon.ico",
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="R2qZKJEnprutZz2bbtWEH9yiKRlDKeZbwQHhaP7D6rg"
        />
        <meta 
          name="naver-site-verification" 
          content="32cae4782e453d247eba34971f56488764aa20a5" 
        />
      </head>
      <body
        className={`${pretendard.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <Suspense>
          <PageViewTracker />
        </Suspense>
      </body>
    </html>
  );
}
