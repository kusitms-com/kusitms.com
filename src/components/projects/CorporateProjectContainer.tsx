"use client";

import React, { useState } from "react";
import { CorporateResponse, getCorporateProjects } from "@/service/projects";
import { Filter } from "./Filter";
import { Card } from "./ProjectCard";

type ProjectContainerProps = CorporateResponse;

export const CorporateProjectContainer = ({
  data: corporateProjectsList,
}: ProjectContainerProps) => {
  const [projects, setProjects] = useState(corporateProjectsList);
  const [order, setOrder] = useState<"desc" | "asc">("desc");

  const handleFilterChange = async (newOrder: "desc" | "asc") => {
    setOrder(newOrder);
    const res = await getCorporateProjects(newOrder);
    setProjects(res.data);
  };

  return (
    <div className="w-full mt-[100px] mb-[180px]">
      <Filter order={order} onChange={handleFilterChange} />
      <div className="grid grid-cols-3 gap-5">
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
                  <Card.Category key={index}>{category}</Card.Category>
                ))}
              </Card.CategoryContainer>
            </Card.Info>
          </Card>
        ))}
      </div>
    </div>
  );
};
