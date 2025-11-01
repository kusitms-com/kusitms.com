"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

type TeamItem = {
  mainIcon: string;
  bgIcon: string;
  title: string;
  subtitle: string;
  delay?: number;
  description?: string;
};

function TeamCard({
  mainIcon,
  bgIcon,
  title,
  subtitle,
  delay,
  description,
  active,
  onActivate,
  onDeactivate,
}: TeamItem & { active: boolean; onActivate: () => void; onDeactivate: () => void }) {
  const baseWidth = 224;
  const expandedWidth = baseWidth * 2;

  return (
    <motion.div
      className={clsx("relative flex-shrink-0 overflow-visible cursor-pointer")}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onClick={() => (active ? onDeactivate() : onActivate())}
      initial={{ opacity: 0, y: 20, width: baseWidth }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ width: active ? expandedWidth : baseWidth, height: 317.692 }}
      transition={{
        opacity: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
        y: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
        width: { type: "spring", stiffness: 180, damping: 22, mass: 0.9 },
        height: { type: "spring", stiffness: 180, damping: 22, mass: 0.9 },
      }}
      viewport={{ once: true }}
      style={{ height: 317.692, willChange: "width, transform" }}
    >
      <div
        className={clsx("relative w-full h-full px-[18.1px] py-[13.6px] bg-sky-50 overflow-hidden")}
        style={{
          borderRadius: "9.077px",
          border: "2px solid #F0F4FF",
          boxShadow: "0px 4px 10px 0px rgba(121, 212, 255, 0.20)",
        }}
      >
      <motion.div
        className="absolute top-0 left-0"
        animate={{ scale: active ? 1.5 : 1, x: active ? 10 : 0, y: active ? 10 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <img src={bgIcon} alt={title} className="w-full h-full object-cover" />
      </motion.div>
      <div className="relative z-10 pr-2">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-baseline gap-2">
            <span className="text-dark-blue-500 text-[22.692px] font-semibold leading-none">
              {title.split(" ")[0]}
            </span>
            <div>
              <span className="text-gray-900 text-[27.2px] font-semibold leading-none">
                {title.split(" ")[1]}
              </span>
              <p className="text-[15.88px] font-semibold text-gray-600">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={clsx("absolute", title.includes("Backend") ? "right-[-30px] bottom-[35px]" : "right-[-45px]")}
        animate={{ scale: active ? 1.3 : 1, rotate: active ? 28 : 0, x: active ? -40 : 0, y: active ? -10 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.9 }}
      >
        <img src={mainIcon} alt={title} />
      </motion.div>
      <motion.div
        className="absolute left-[53px] bottom-[33px]"
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <p className="text-body-6 text-gray-600 leading-5 whitespace-pre-line">{description}</p>
      </motion.div>
      </div>
    </motion.div>
  );
}

export default function TeamCardsSection() {
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const teamData: TeamItem[] = [
    {
      mainIcon: "/main/MangeIcon.svg",
      bgIcon: "/main/MangeBg.svg",
      title: "01 Planner",
      subtitle: "기획자",
      delay: 0,
      description:
        "가설을 세우고\n검증하며 논리적인\n문서화와 명확한\n커뮤니케이션으로\n방향성을 제시해요.",
    },
    {
      mainIcon: "/main/DesignIcon.svg",
      bgIcon: "/main/DesignBg.svg",
      title: "02 Designer",
      subtitle: "디자이너",
      delay: 0.2,
      description:
        "기획 의도를 파악해\n디자인에 녹여내고\nUX이론을 바탕으로\n논리적인 디자인을\n설계해요.",
    },
    {
      mainIcon: "/main/FrontendIcon.svg",
      bgIcon: "/main/FrontendBg.svg",
      title: "03 Frontend",
      subtitle: "프론트엔드",
      delay: 0.4,
      description:
        "디자이너와\n 협업해 디자인\n 시스템을 구축하고\n 백엔드 개발자와\n 기능을 조율해요",
    },
    {
      mainIcon: "/main/BackendIcon.svg",
      bgIcon: "/main/BackendBg.svg",
      title: "04 Backend",
      subtitle: "백엔드",
      delay: 0.6,
      description:
        "프로젝트의 요구\n 사항과 규모, 팀의 \n 상황에 따라 기술\n 스택을 선정하고\n 오류원인을 분석해요",
    },
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden">
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

      <section className="flex flex-nowrap justify-start gap-4 pt-[30px] desktop:pt-[80px] desktop:mb-[300px] mb-[100px] px-4 desktop:px-0 w-full overflow-hidden">
        {teamData.map((item, idx) => (
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


