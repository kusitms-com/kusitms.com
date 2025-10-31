"use client";
import React from "react";
import TeamCardsSection from "./TeamCardsSection";
import ExecutiveSection from "./ExecutiveSection";

export default function PartIntroSection() {
  return (
    <div className="flex flex-col pt-[100px] desktop:pt-[240px] items-center">
      <TeamCardsSection />
      <ExecutiveSection />
    </div>
  );
}
