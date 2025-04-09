"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getMeetupProjects, MeetupResponse } from "@/service/projects";
import { Filter } from "./Filter";
import { Card } from "./ProjectCard";

type ProjectContainerProps = MeetupResponse;

export const ProjectContainer = ({
  data: meetupProjectList,
}: ProjectContainerProps) => {
  const [projects, setProjects] = useState(meetupProjectList);
  const [order, setOrder] = useState<"desc" | "asc">("desc");

  const router = useRouter();

  const handleFilterChange = async (newOrder: "desc" | "asc") => {
    setOrder(newOrder);
    const res = await getMeetupProjects(newOrder);
    setProjects(res.data);
  };

  const projectNavigate = (projectId: number) => {
    router.push(`/projects/meetup/${projectId}`);
  };

  return (
    <div className="w-full mt-[100px]">
      <Filter order={order} onChange={handleFilterChange} />
      <div className="grid grid-cols-3 gap-5">
        {projects.meetup_list.map((project) => (
          <Card
            key={project.meetup_id}
            onClick={() => projectNavigate(project.meetup_id)}
          >
            <Card.Poster src={project.poster_url} />
            <Card.Logo src={project.logo_url} />
            <Card.Info>
              <Card.Cardinal>{project.cardinal}기</Card.Cardinal>
              <Card.ProjectName>{project.name}</Card.ProjectName>
              <Card.ContentIntro>{project.one_line_intro}</Card.ContentIntro>
              <Card.CategoryContainer>
                {project.instagram_url && (
                  <Card.Instagram href={project.instagram_url} />
                )}
                {project.github_url && (
                  <Card.Github href={project.github_url} />
                )}
                {project.app_url && <Card.Link href={project.app_url} />}
              </Card.CategoryContainer>
            </Card.Info>
          </Card>
        ))}
      </div>
    </div>
  );
};
