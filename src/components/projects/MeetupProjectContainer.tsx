"use client";

import { ShowcaseCard } from "@kusitms.com/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getMeetupProjects, type MeetupResponse } from "@/service/projects";
import ProjectFilter from "./common/ProjectFilter";

type ProjectContainerProps = MeetupResponse;

export default function ProjectContainer({ data: meetupProjectList }: ProjectContainerProps) {
  const [projects, setProjects] = useState(meetupProjectList);
  const [cardinal, setCardinal] = useState("");

  const router = useRouter();

  const handleFilterChange = async (newCardinal: string) => {
    setCardinal(newCardinal);
    const res = await getMeetupProjects(newCardinal);
    setProjects(res.data);
  };

  return (
    <div className="w-full tablet:mb-[32px] mb-5 tablet:px-10 px-4">
      <ProjectFilter
        cardinal={cardinal}
        onChange={handleFilterChange}
        projectList={meetupProjectList.meetup_list}
      />
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-5 gap-x-[22px]">
        {projects.meetup_list.map((project) => (
          <Link
            href={`/projects/meetup/${project.meetup_id}`}
            key={project.meetup_id}
            prefetch={false}
            className="project-card"
            onMouseEnter={() => {
              router.prefetch(`/projects/meetup/${project.meetup_id}`);
            }}
          >
            <ShowcaseCard
              name={project.name}
              description={project.one_line_intro}
              th={project.cardinal}
              isMeetup={true}
              type={project.type as "WEB" | "APP"}
              imageUrl={project.poster_url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
