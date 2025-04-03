import React from "react";
import { CorporatePage, MeetupPage } from "@/app/pages/projects";

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
    return <MeetupPage />;
  } else if (projectType === "corporate") {
    return <CorporatePage />;
  }
}

export default BranchPage;
