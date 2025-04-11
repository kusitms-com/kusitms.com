import { ReactNode } from "react";

interface Props {
  params: Promise<{ projectType: string }>;
  children: ReactNode;
}

export async function generateMetadata({ params }: Props) {
  const { projectType } = await params;

  return {
    title: `KUSITMS | ${projectType === "meetup" ? "밋업" : "기업"} 프로젝트`,
    description: "큐시즘에서 진행한 다양한 프로젝트들을 한눈에 확인해보세요.",
    keywords: [
      "큐시즘",
      "KUSITMS",
      "프로젝트",
      "밋업",
      "기업",
      "대학생 IT 학회",
      projectType,
    ],
    openGraph: {
      title: `KUSITMS ${projectType === "meetup" ? "밋업" : "기업"} 프로젝트`,
      description: "큐시즘에서 진행한 다양한 프로젝트들을 한눈에 확인해보세요.",
      url: "https://www.kusitms.com/projects/meetup",
      siteName: "KUSITMS",
      images: [
        {
          url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",
          alt: "KUSITMS 프로젝트 목록",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `KUSITMS ${projectType === "meetup" ? "밋업" : "기업"} 프로젝트`,
      description: "큐시즘에서 진행한 다양한 프로젝트들을 한눈에 확인해보세요.",
      images: [
        {
          url: "https://kusitms-bucket.s3.ap-northeast-2.amazonaws.com/upload/fdc0f561-9f61-47d0-be9b-1274cfe4814emarkup_banner.png",
          alt: "KUSITMS 프로젝트 목록",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectsLayout({
  children,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ projectType: string }>;
}>) {
  return <main className="flex flex-col items-center">{children}</main>;
}
