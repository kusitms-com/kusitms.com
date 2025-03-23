import React from "react";
import { getCorporateProjects, getMeetupProjects } from "@/service/projects";

export const ProjectTotalCount = async ({ pathname }: { pathname: string }) => {
  if (pathname === "meetup") {
    const meetupProjectList = await getMeetupProjects("desc");
    return (
      <span className="text-[#62EFE5]">
        {meetupProjectList.data.meetup_count}
      </span>
    );
  } else if (pathname === "corporate") {
    const corporateProjectsList = await getCorporateProjects("desc");
    return (
      <span className="text-[#62EFE5]">
        {corporateProjectsList.data.corporateCount}
      </span>
    );
  }
};
