"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { getMeetupProjects, MeetupResponse } from "@/service/projects";
import useToggleHook from "@/hooks/useToggleHook";
import { Filter } from "./Filter";
import { Card } from "./ProjectCard";
import { MeetupProjectModal } from "./MeetupProjectModal";

type ProjectContainerProps = MeetupResponse;

export const ProjectContainer = ({
  data: meetupProjectList,
}: ProjectContainerProps) => {
  const [projects, setProjects] = useState(meetupProjectList);
  const [order, setOrder] = useState<"desc" | "asc">("desc");

  const { isOpen, changeopenState, changecloseState } = useToggleHook();

  const handleFilterChange = async (newOrder: "desc" | "asc") => {
    setOrder(newOrder);
    const res = await getMeetupProjects(newOrder);
    setProjects(res.data);
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <MeetupProjectModal changecloseState={changecloseState} />,
          document.body
        )}
      <div className="w-full mt-[100px]">
        <Filter order={order} onChange={handleFilterChange} />
        {/* <MeetupProjectModal /> */}
        <div className="grid grid-cols-3 gap-5">
          {projects.meetup_list.map((project) => (
            <Card key={project.meetup_id} onClick={changeopenState}>
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
    </>
  );
};
