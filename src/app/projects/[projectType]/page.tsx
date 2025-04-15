import React from "react";
import { CorporateSection, MeetupSection } from "@/components/projects";

export async function generateStaticParams() {
  return [
    {
      projectType: "meetup",
    },
    { projectType: "corporate" },
  ];
}

async function BranchPage({
  params,
}: Readonly<{
  params: Promise<{ projectType: string }>;
}>) {
  const { projectType } = await params;
  if (projectType === "meetup") {
    return <MeetupSection projectType={projectType} />;
  } else if (projectType === "corporate") {
    return <CorporateSection projectType={projectType} />;
  }
}

export default BranchPage;
