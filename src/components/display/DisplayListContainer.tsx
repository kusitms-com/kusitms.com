"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getMeetupProjects,
  MeetupResponse,
} from "@/service/projects/getMeetupProjects";
import { Card } from "../projects";
import { OptionBar } from "./OptionBar";

type ProjectContainerProps = MeetupResponse;

export const DisplayListContainer = ({
  data: meetupProjectList,
}: ProjectContainerProps) => {
  const [projects, setProjects] = useState(meetupProjectList);
  const [batch, setBatch] = useState("");

  const handleFilterChange = async (newBatch: string) => {
    setBatch(newBatch);
    const res = await getMeetupProjects("31", newBatch);
    setProjects(res.data);
  };

  const router = useRouter();
  const projectNavigate = (projectId: number) => {
    router.push(`/display/${projectId}`);
  };

  return (
    <>
      <OptionBar batch={batch} onChange={handleFilterChange} />
      <div className="w-full mt-[100px] mb-[180px]">
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
                  {project.tags.map((tag, index) => (
                    <Card.Category key={index}>{tag}</Card.Category>
                  ))}
                </Card.CategoryContainer>
              </Card.Info>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
