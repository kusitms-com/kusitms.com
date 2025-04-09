import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KUSITMS | PROJECTS",
  description: "",
};

export default async function ProjectDetailLayout({
  children,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ projectType: string; projectNumber: string }>;
}>) {
  return <main className="mx-auto w-full max-w-[1180px]">{children}</main>;
}
