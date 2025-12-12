import type { MetadataRoute } from "next";
import { getMeetupProjects } from "@/service/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let dynamicRoutes: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: "monthly";
    priority: number;
  }> = [];

  try {
    const meetupProjectList = await getMeetupProjects("", "");
    if (meetupProjectList?.data?.meetup_list) {
      dynamicRoutes = meetupProjectList.data.meetup_list.map((project) => ({
        url: `https://www.kusitms.com/projects/meetup/${project.meetup_id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch meetup projects for sitemap:", error);
  }

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
      lastModified: new Date(),
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
    ...dynamicRoutes,
  ];
}
