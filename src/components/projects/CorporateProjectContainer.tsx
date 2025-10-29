"use client";

import { useState } from "react";
import {
  type CorporateResponse,
  getCorporateProjects,
} from "@/service/projects";
import ProjectFilter from "./common/ProjectFilter";
import Card from "./common/ProjectCard";

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
    <div className="w-full desktop:mb-[180px] mb-[32px] px-10">
      <ProjectFilter
        cardinal={cardinal}
        onChange={handleFilterChange}
        projectList={corporateProjectsList.corporateList}
      />
      <div className="grid tablet:grid-cols-3 grid-cols-1 gap-5 gap-x-[22px] justify-items-center">
        {projects.corporateList.map((project) => (
          <Card key={project.corporate_id}>
            <Card.Poster src={project.banner_url.trim()} />
            <Card.Info>
              <Card.Cardinal cardinal={project.cardinal} />
              <Card.ProjectName>{project.name}</Card.ProjectName>
              <Card.ContentIntro>{project.content}</Card.ContentIntro>
            </Card.Info>
          </Card>
        ))}
      </div>
    </div>
  );
}
