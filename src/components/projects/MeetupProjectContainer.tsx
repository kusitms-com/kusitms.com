"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getMeetupProjects, MeetupResponse } from "@/service/projects";
import Filter from "./Filter";
import Card from "./ProjectCard";

type ProjectContainerProps = MeetupResponse;

export default function ProjectContainer({
  data: meetupProjectList,
}: ProjectContainerProps) {
  const [projects, setProjects] = useState(meetupProjectList);
  const [cardinal, setCardinal] = useState("");

  const router = useRouter();

  const handleFilterChange = async (newCardinal: string) => {
    setCardinal(newCardinal);
    const res = await getMeetupProjects(newCardinal);
    setProjects(res.data);
  };

  return (
    <div className="w-full mt-[100px] mb-[180px]">
      <Filter
        cardinal={cardinal}
        onChange={handleFilterChange}
        projectList={meetupProjectList.meetup_list}
      />
      <div className="grid grid-cols-3 gap-5">
        {projects.meetup_list.map((project) => (
          <Link
            href={`/projects/meetup/${project.meetup_id}`}
            key={project.meetup_id}
            prefetch={false}
            onMouseEnter={() => {
              router.prefetch(`/projects/meetup/${project.meetup_id}`);
            }}
          >
            <Card key={project.meetup_id}>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
