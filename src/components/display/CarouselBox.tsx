import * as React from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shared/ui/carousel";
import { MeetupProjectDetailResponse } from "@/service/projects";

interface CarouselBoxProps {
  projectDetails: MeetupProjectDetailResponse[];
}

export default function CarouselBox({ projectDetails }: CarouselBoxProps) {
  return (
    <section className="w-full max-w-[1920px] max-h-[1080px] desktop:h-[1080px] h-[340px] relative z-10">
      <Carousel autoPlay={true} opts={{ loop: true }}>
        <CarouselContent className="w-full desktop:h-[1080px] h-[420px]">
          {projectDetails.map((projectDetail, index) => (
            <CarouselItem key={index} className="w-full relative">
              <Image
                src={projectDetail.data.web_thumbnail_url}
                alt={projectDetail.data.name}
                width={1920}
                height={1080}
                className="desktop:w-full desktop:h-full w-[375px] h-[200px] object-cover"
              />
              <div
                key={index}
                className=" bg-[rgba(47,48,56,0.5)] 
            w-full backdrop-blur-[30px] absolute bottom-15 left-0 px-9 
            desktop:py-9 py-4 flex desktop:flex-row flex-col justify-between desktop:items-center items-start z-10"
              >
                <div className="flex flex-col desktop:gap-y-2 gap-y-0">
                  <h2 className="desktop:text-[40px] text-[20px] font-extrabold text-white">
                    {projectDetail.data.name}
                  </h2>
                  <p className="desktop:text-[24px] text-[10px] font-normal text-white">
                    {projectDetail.data.one_line_intro}
                  </p>
                </div>
                <div className="flex desktop:gap-x-10 gap-x-5 desktop:mt-0 mt-5">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center">
                      <h4 className="desktop:text-[24px] text-[10px] font-normal text-[#62EFE5] border-r border-white pr-3 h-[21px] flex items-center">
                        기획
                      </h4>
                      <p className="desktop:text-[24px] text-[10px] font-normal text-white pl-3">
                        {projectDetail.data.team.planner.join(", ")}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <h4 className="desktop:text-[24px] text-[10px] font-normal text-[#62EFE5] border-r border-white pr-3 h-[21px] flex items-center">
                        디자인
                      </h4>
                      <p className="desktop:text-[24px] text-[10px] font-normal text-white pl-3">
                        {projectDetail.data.team.designer.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4 items-end">
                    <div className="flex items-center">
                      <h4 className="desktop:text-[24px] text-[10px] font-normal text-[#62EFE5] border-r border-white pr-3 h-[21px] flex items-center">
                        프론트엔드
                      </h4>
                      <p className="desktop:text-[24px] text-[10px] font-normal text-white pl-3">
                        {projectDetail.data.team.frontend.join(", ")}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <h4 className="desktop:text-[24px] text-[10px] font-normal text-[#62EFE5] border-r border-white pr-3 h-[21px] flex items-center">
                        백엔드
                      </h4>
                      <p className="desktop:text-[24px] text-[10px] font-normal text-white pl-3">
                        {projectDetail.data.team.backend.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="desktop:block hidden" />
        <CarouselNext className="desktop:block hidden" />
      </Carousel>
    </section>
  );
}
