"use client";
import { motion } from "framer-motion";
import React from "react";
import { TEAM_DATA } from "@/constants/teamData";
import TeamCard from "./TeamCard";

export default function TeamCardsSection() {
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const [mobileExpandedIdx, setMobileExpandedIdx] = React.useState<number | null>(null);

  return (
    <div className="flex flex-col items-center overflow-hidden desktop:pt-[240px] pt-[80px] desktop:pb-[300px] pb-[160px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[16px] items-center justify-center"
      >
        <p className="min-[768px]:text-title-5 text-title-7 text-black">함께하는 큐밀리</p>
        <p className="text-center min-[768px]:text-body-4 text-body-8 text-gray-500">
          학회원이 새로운 경험을 통해 성장할 수 있도록 <br />
          다양한 프로젝트를 진행해요.
        </p>
      </motion.div>
      <section className="flex flex-col items-center gap-4 min-[768px]:grid min-[768px]:grid-cols-[auto_auto] min-[768px]:gap-4 min-[768px]:justify-center min-[768px]:justify-items-center desktop:!flex desktop:flex-row desktop:flex-nowrap desktop:justify-center desktop:gap-4 desktop:max-w-none desktop:overflow-x-auto pt-[30px] desktop:pt-[80px] px-4 w-full">
        {TEAM_DATA.map((item, idx) => (
          <TeamCard
            key={item.title}
            {...item}
            active={activeIdx === idx}
            onActivate={() => setActiveIdx(idx)}
            onDeactivate={() => setActiveIdx((cur) => (cur === idx ? null : cur))}
            index={idx}
            mobileExpanded={mobileExpandedIdx}
            onMobileExpand={(idx) => setMobileExpandedIdx(idx)}
            onMobileCollapse={() => setMobileExpandedIdx(null)}
          />
        ))}
      </section>
    </div>
  );
}
