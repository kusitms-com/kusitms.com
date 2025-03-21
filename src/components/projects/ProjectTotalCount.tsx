import React from "react";
import { getMeetupProjects } from "@/service/projects";

export const ProjectTotalCount = async ({ pathname }: { pathname: string }) => {
  if (pathname === "meetup") {
    const meetupProjectList = await getMeetupProjects();
    return (
      <span className="text-[#62EFE5]">
        {meetupProjectList.data.meetup_count}
      </span>
    );
  } else if (pathname === "enterprice") {
    const meetupProjectList = await getMeetupProjects();
    return (
      <span className="text-[#62EFE5]">
        {meetupProjectList.data.meetup_count}
      </span>
    );
  }
};
