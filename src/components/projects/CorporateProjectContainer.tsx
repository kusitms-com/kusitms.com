"use client";

import { ShowcaseCard } from "@kusitms.com/ui";
import { useState } from "react";
import { type CorporateResponse, getCorporateProjects } from "@/service/projects";
import ProjectFilter from "./common/ProjectFilter";

type ProjectContainerProps = CorporateResponse;

export default function CorporateProjectContainer({
  data: corporateProjectsList,
}: ProjectContainerProps) {
  const [projects, setProjects] = useState(corporateProjectsList);
  const [cardinal, setCardinal] = useState("");

  const handleFilterChange = async (newCardinal: string) => {
    setCardinal(newCardinal);
    const res = await getCorporateProjects(newCardinal);
    setProjects(res.data);
  };

  return (
    <div className="w-full tablet:mb-[32px] mb-5 tablet:px-10 px-4">
      <ProjectFilter
        cardinal={cardinal}
        onChange={handleFilterChange}
        projectList={corporateProjectsList.corporateList}
      />
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-5 gap-x-[22px] [&_.project-card>div]:!w-full [&_.project-card>div]:!max-w-full">
        {projects.corporateList.map((project) => (
          <div key={project.corporate_id} className="project-card cursor-pointer">
            <ShowcaseCard
              name={project.name}
              description={project.content}
              th={project.cardinal}
              isMeetup={false}
              type="WEB"
              imageUrl={project.banner_url.trim()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
