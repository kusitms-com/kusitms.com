"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { getMeetupProjects, type MeetupResponse } from "@/service/projects";
import ProjectFilter from "./common/ProjectFilter";
import Card from "./common/ProjectCard";

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
    <div className="w-full desktop:mb-[180px] mb-[32px] px-10">
      <ProjectFilter
        cardinal={cardinal}
        onChange={handleFilterChange}
        projectList={meetupProjectList.meetup_list}
      />
      <div className="grid tablet:grid-cols-3 grid-cols-1 gap-5 gap-x-[22px] justify-items-center ">
        {projects.meetup_list.map((project) => (
          <Link
            href={`/projects/meetup/${project.meetup_id}`}
            key={project.meetup_id}
            prefetch={false}
            onMouseEnter={() => {
              router.prefetch(`/projects/meetup/${project.meetup_id}`);
            }}
          >
            <Card key={project.meetup_id} hoverable>
              <Card.Poster src={project.poster_url} />
              <Card.Info>
                <Card.Cardinal
                  cardinal={project.cardinal}
                  type={project.type}
                />
                <Card.ProjectName>{project.name}</Card.ProjectName>
                <Card.ContentIntro>{project.one_line_intro}</Card.ContentIntro>
              </Card.Info>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
