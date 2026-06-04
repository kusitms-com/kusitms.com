"use client";

import { Modal } from "@kusitms.com/ui";
import { useRouter } from "next/navigation";
import type { MeetupProjectDetail } from "@/service/projects";

interface ProjectModalProps {
  project: MeetupProjectDetail;
  prevId?: string;
  nextId?: string;
  domain?: string;
}

export default function ProjectModal({
  project,
  prevId,
  nextId,
  domain = "/projects/meetup",
}: ProjectModalProps) {
  const router = useRouter();

  const teamRoles = [
    { role: "기획", members: project.team.planner },
    { role: "디자인", members: project.team.designer },
    ...(project.team.frontend?.length
      ? [{ role: "프론트엔드", members: project.team.frontend }]
      : []),
    ...(project.team.backend?.length ? [{ role: "백엔드", members: project.team.backend }] : []),
    ...(project.team.ios?.length ? [{ role: "IOS", members: project.team.ios }] : []),
    ...(project.team.aos?.length ? [{ role: "AOS", members: project.team.aos }] : []),
  ].filter((role) => role.members?.length > 0);

  const links = [
    project.behance_url
      ? { type: "behance" as const, label: "Behance", url: project.behance_url }
      : null,
    project.github_url
      ? { type: "github" as const, label: "Github", url: project.github_url }
      : null,
    project.app_url
      ? { type: "service" as const, label: "서비스 바로가기", url: project.app_url }
      : null,
  ].filter((link): link is NonNullable<typeof link> => link !== null);

  return (
    <Modal
      isOpen={true}
      onClose={() => router.back()}
      onPrev={prevId ? () => router.replace(`${domain}/${prevId}`) : undefined}
      onNext={nextId ? () => router.replace(`${domain}/${nextId}`) : undefined}
      name={project.name}
      th={project.cardinal}
      type={project.type as "WEB" | "APP"}
      imageUrl={project.poster_url}
      description={project.intro}
      teamRoles={teamRoles}
      links={links}
    />
  );
}
