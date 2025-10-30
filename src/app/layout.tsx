import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "@/components/shared";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KUSITMS",
  description:
    "비전을 가지고 함께 성장하는 학회, 큐시즘의 공식 홈페이지입니다.",
  applicationName: "KUSITMS",
  generator: "Next.js",
  keywords: ["KUSITMS", "큐시즘", "학회", "공식 홈페이지"],
  other: {
    "google-site-verification": "KFgbBXJibXLrdaVRpqy8V3ko4k71bsoX3NJjv0cWbKw",
    google: "notranslate",
  },
  openGraph: {
    type: "website",
    title: "KUSITMS",
    description:
      "비전을 가지고 함께 성장하는 학회, 큐시즘의 공식 홈페이지입니다.",
    url: "https://www.kusitms.com",
    images: [
      {
        url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",
        alt: "KUSITMS 홈페이지 배너",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
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
          content="KFgbBXJibXLrdaVRpqy8V3ko4k71bsoX3NJjv0cWbKw"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </body>
    </html>
  );
}
