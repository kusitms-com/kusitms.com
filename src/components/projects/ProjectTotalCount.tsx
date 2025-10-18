import React from "react";
import { getCorporateProjects, getMeetupProjects } from "@/service/projects";

export default async function ProjectTotalCount({ pathname }: { pathname: string }) {
  if (pathname === "meetup") {
    const meetupProjectList = await getMeetupProjects("");
    return <span className="text-[#62EFE5]">{meetupProjectList.data.meetup_count}</span>;
  } else if (pathname === "corporate") {
    const corporateProjectsList = await getCorporateProjects("");
    return <span className="text-[#62EFE5]">{corporateProjectsList.data.corporateCount}</span>;
  }
}
