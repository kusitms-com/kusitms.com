"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { COMPANY_ROW1, COMPANY_ROW2 } from "@/constants/companyRows";
import type { MeetupItem } from "@/service/projects/getMeetupProjects";
import MeetupProjectCarousel from "./MeetupProjectCarousel";

interface ProgramIntroSectionProps {
  meetupProjects?: MeetupItem[];
}

export default function ProgramIntroSection({ meetupProjects = [] }: ProgramIntroSectionProps) {
  return (
    <div className="px-4 tablet:px-6 max-w-[1024px] mx-auto flex flex-col justify-center items-center pt-4 pb-[100px] tablet:pb-[200px] w-full overflow-x-hidden">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-title-7 tablet:text-title-5 text-gray-900 font-semibold">
            학회 프로젝트 소개
          </h1>
        </div>
        <div className="mt-[52px] tablet:mt-[60px] py-4 flex items-center justify-center gap-2">
          <span className="inline-flex items-center justify-center tablet:w-7 tablet:h-7 w-[18px] h-[18px] rounded-full bg-gray-800 text-white tablet:text-body-1 text-body-7">
            1
          </span>
          <p className="text-body-5 tablet:text-title-7 text-gray-800">기업 연계 프로젝트</p>
        </div>
        <p className="text-body-8 tablet:hidden text-center text-gray-500">
          실제 기업이 고민하고 있는 경영 · 마케팅
          <br /> 문제나 개발과 관련된 과제를 받아 팀별로
          <br /> 아이디어를 제시해 과제를 수행하는 프로젝트예요
        </p>
        <p className="hidden tablet:block text-body-6 text-center text-gray-500">
          실제 기업이 고민하고 있는 경영 · 마케팅 문제나 개발과 관련된 과제를 받아 <br />
          팀별로 아이디어를 제시해 과제를 수행하는 프로젝트예요
        </p>
        <div className="mt-[36px] tablet:mt-[56px] w-full">
          <div className="relative overflow-hidden h-[110px]">
            <motion.div
              className="flex items-center w-[max-content] flex-nowrap whitespace-nowrap"
              initial={{ x: "-50%" }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {[...COMPANY_ROW1, ...COMPANY_ROW1].map((src, idx) => (
                <div key={`r1-${idx}`}>
                  <Image
                    src={src}
                    alt={`company-${idx}`}
                    width={120}
                    height={53}
                    className="block tablet:hidden"
                  />
                  <Image
                    src={src}
                    alt={`company-${idx}`}
                    width={180}
                    height={80}
                    className="hidden tablet:block"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          <div className="relative overflow-hidden h-[110px] -mt-10 tablet:mt-0">
            <motion.div
              className="flex items-center w-[max-content] flex-nowrap whitespace-nowrap "
              initial={{ x: "0%" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity, delay: 1.5 }}
            >
              {[...COMPANY_ROW2, ...COMPANY_ROW2].map((src, idx) => (
                <div key={`r2-${idx}`}>
                  <Image
                    src={src}
                    alt={`company2-${idx}`}
                    width={120}
                    height={59}
                    className="block tablet:hidden"
                  />
                  <Image
                    src={src}
                    alt={`company2-${idx}`}
                    width={180}
                    height={88}
                    className="hidden tablet:block"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="tablet:mt-[100px] mt-[80px] flex items-center justify-center gap-2 py-4">
          <span className="inline-flex items-center justify-center tablet:w-7 tablet:h-7 w-[18px] h-[18px] rounded-full bg-gray-800 text-white tablet:text-body-1 text-body-7">
            2
          </span>
          <p className="text-body-5 tablet:text-title-7 text-gray-800">밋업 프로젝트</p>
        </div>
        <p className="text-body-8 tablet:hidden text-center text-gray-500">
          기획파트에서 발제된 아이디어를 디자인,
          <br /> 개발파트와 함꼐 3개월동안 준비하여 발표하는 <br /> KUSITMS의 메인 프로젝트예요
        </p>
        <p className="hidden tablet:block text-body-6 text-center text-gray-500">
          기획파트에서 발제된 아이디어를 디자인, 개발파트와 함꼐 3개월동안 <br />
          준비하여 발표하는 KUSITMS의 메인 프로젝트예요
        </p>
        {meetupProjects.length > 0 && <MeetupProjectCarousel projects={meetupProjects} />}
      </section>
    </div>
  );
}
