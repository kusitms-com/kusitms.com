import type { MetadataRoute } from "next";
import { getLatestStatusChangeDate, toKstDate } from "@/lib/recruitStatus";
import { getMeetupProjects } from "@/service/projects";

type SitemapEntry = MetadataRoute.Sitemap[number];

// 리크루팅 lastmod가 모집 상태 전환일에 맞춰 바뀌도록 하루마다 다시 만든다(전환은 날짜 단위)
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let meetupRoutes: SitemapEntry[] = [];

  try {
    const meetupProjectList = await getMeetupProjects("", "");
    if (meetupProjectList?.data?.meetup_list) {
      meetupRoutes = meetupProjectList.data.meetup_list.map((project) => ({
        url: `https://www.kusitms.com/projects/meetup/${project.meetup_id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch meetup projects for sitemap:", error);
  }

  // 메타 규칙 1-4: 리크루팅은 가장 최근 모집 상태 전환일(공고일·접수 시작·마감 다음 날).
  // 아직 전환이 없으면(이번 기수 공고 전) 다른 페이지처럼 생성 시각을 쓴다
  const recruitUpdatedAt = getLatestStatusChangeDate(toKstDate(new Date())) ?? new Date();

  return [
    {
      url: "https://www.kusitms.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.kusitms.com/reviews",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://www.kusitms.com/recruit",
      lastModified: recruitUpdatedAt,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://www.kusitms.com/projects/meetup",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.kusitms.com/projects/corporate",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...meetupRoutes,
  ];
}
