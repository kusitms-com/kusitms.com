import { ReactNode } from "react";
import { getMeetupProjectDetail } from "@/service/projects";

interface Props {
  params: Promise<{ projectNumber: string }>;
  children: ReactNode;
}

export async function generateMetadata({ params }: Props) {
  const { projectNumber } = await params;
  const { data: project } = await getMeetupProjectDetail(projectNumber);

  return {
    title: `KUSITMS | ${project.name}`,
    description: `${project.one_line_intro}`,
    keywords: [project.name, "KUSITMS", "큐시즘", "밋업", "프로젝트"],
    metadataBase: new URL("https://www.kusitms.com"),
    openGraph: {
      type: "website",
      title: project.name,
      description: project.one_line_intro,
      url: `/projects/meetup/${project.meetup_id}`,
      siteName: "KUSITMS",
      images: [
        {
          url: project.poster_url,
          width: 580,
          height: 820,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.one_line_intro,
      images: [
        {
          url: project.poster_url,
          width: 580,
          height: 820,
          alt: project.name,
        },
      ],
    },
    icons: {
      icon: "../../../favicon.ico",
    },
  };
}

export default async function ProjectDetailLayout({
  children,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ projectNumber: string }>;
}>) {
  return (
    <main className="mx-auto w-full desktop:max-w-[1180px] max-w-[330px]">
      {children}
    </main>
  );
}
