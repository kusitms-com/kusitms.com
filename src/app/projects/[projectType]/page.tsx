import React from "react";
import { MeetupPage } from "@/app/pages/projects";

async function BranchPage({
  params,
}: Readonly<{
  params: { projectType: string };
}>) {
  const { projectType } = await params;
  if (projectType === "meetup") {
    return <MeetupPage />;
  } else if (projectType === "enterprice") {
    return <MeetupPage />;
  }
}

export default BranchPage;
