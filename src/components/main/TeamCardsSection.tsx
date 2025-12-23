"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TEAM_DATA } from "@/constants/teamData";
import { DesktopTeamCard, MobileTeamCard, TabletTeamCard } from "./TeamCard";

type LayoutType = "mobile" | "tablet" | "desktop";

export default function TeamCardsSection() {
  const [layout, setLayout] = useState<LayoutType>("desktop");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState<number | null>(null);
  const [tabletExpandedRow, setTabletExpandedRow] = useState<number | null>(null);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setLayout("mobile");
      } else if (width < 1024) {
        setLayout("tablet");
      } else {
        setLayout("desktop");
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden desktop:pt-[240px] pt-[80px] desktop:pb-[300px] pb-[160px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[16px] items-center justify-center"
      >
        <p className="tablet:text-title-5 text-title-7 text-black">함께하는 큐밀리</p>
        <p className="text-center tablet:text-body-4 text-body-8 text-gray-500">
          학회원이 새로운 경험을 통해 성장할 수 있도록 <br />
          다양한 프로젝트를 진행해요.
        </p>
      </motion.div>
      <section className="flex flex-col items-center gap-4 tablet:grid tablet:grid-cols-[auto_auto] tablet:gap-4 tablet:justify-center tablet:justify-items-center desktop:!flex desktop:flex-row desktop:flex-nowrap desktop:justify-center desktop:gap-4 desktop:max-w-none desktop:overflow-x-auto pt-[30px] desktop:pt-[80px] px-4 w-full">
        {TEAM_DATA.map((item, idx) => {
          if (layout === "desktop") {
            return (
              <DesktopTeamCard
                key={item.title}
                {...item}
                active={activeIdx === idx}
                onActivate={() => setActiveIdx(idx)}
                onDeactivate={() => setActiveIdx((cur) => (cur === idx ? null : cur))}
              />
            );
          }

          if (layout === "mobile") {
            return (
              <MobileTeamCard
                key={item.title}
                {...item}
                index={idx}
                isExpanded={mobileExpandedIdx === idx}
                onExpand={(idx) => setMobileExpandedIdx(idx)}
                onCollapse={() => setMobileExpandedIdx(null)}
              />
            );
          }
          return (
            <TabletTeamCard
              key={item.title}
              {...item}
              index={idx}
              tabletExpandedRow={tabletExpandedRow}
              onTabletRowExpand={(row) => setTabletExpandedRow(row)}
              onTabletRowCollapse={() => setTabletExpandedRow(null)}
            />
          );
        })}
      </section>
    </div>
  );
}
