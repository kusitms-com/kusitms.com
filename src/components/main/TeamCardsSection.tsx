"use client";
import { motion } from "framer-motion";
import React from "react";
import TeamCard from "./TeamCard";
import { TEAM_DATA } from "@/constants/teamData";

export default function TeamCardsSection() {
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);

  return (
    <div className="flex flex-col items-center overflow-hidden pt-[100px] desktop:pt-[240px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[16px] items-center justify-center"
      >
        <p className="text-title-5 text-black">함께하는 큐밀리</p>
        <p className="text-center text-body-4 desktop:text-[20px] text-gray-500">
          학회원이 새로운 경험을 통해 성장할 수 있도록 <br />
          다양한 프로젝트를 진행해요.
        </p>
      </motion.div>
      <section className="flex flex-nowrap justify-center gap-4 pt-[30px] desktop:pt-[80px] desktop:mb-[300px] mb-[100px] px-4 desktop:px-0 w-full overflow-hidden">
        {TEAM_DATA.map((item, idx) => (
          <TeamCard
            key={item.title}
            {...item}
            active={activeIdx === idx}
            onActivate={() => setActiveIdx(idx)}
            onDeactivate={() => setActiveIdx((cur) => (cur === idx ? null : cur))}
          />
        ))}
      </section>
    </div>
  );
}
