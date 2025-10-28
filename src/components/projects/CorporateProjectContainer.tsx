"use client";

import React, { useState } from "react";
import {
  type CorporateResponse,
  getCorporateProjects,
} from "@/service/projects";
import ProjectFilter from "./common/ProjectFilter";
import Card from "./ProjectCard";

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
      <div className="grid desktop:grid-cols-3 grid-cols-1 gap-5 justify-items-center">
        {projects.corporateList.map((project) => (
          <Card key={project.corporate_id}>
            <Card.Poster src={project.banner_url.trim()} />
            <Card.Logo src={project.logo_url} />
            <Card.Info>
              <Card.Cardinal>{project.cardinal}기</Card.Cardinal>
              <Card.ProjectName>{project.name}</Card.ProjectName>
              <Card.ContentIntro>{project.content}</Card.ContentIntro>
              <Card.CategoryContainer>
                {project.category.map((category, index) => (
                  <Card.Category key={index}>#{category}</Card.Category>
                ))}
              </Card.CategoryContainer>
            </Card.Info>
          </Card>
        ))}
      </div>
    </div>
  );
}
