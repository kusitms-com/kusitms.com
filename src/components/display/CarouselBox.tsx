import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shared/ui/carousel";

export function CarouselBox() {
  return (
    <div className="w-full max-w-[1920px] max-h-[1080px] h-[1080px] mt-23 relative">
      <Carousel>
        <CarouselContent className="w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full">
              <div>
                <div className="w-full h-[1080px] bg-green-900">box1</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div
        className=" bg-[rgba(47,48,56,0.5)] 
      w-full backdrop-blur-[30px] absolute bottom-0 left-0 px-9 
      py-25 flex justify-between items-center"
      >
        <div className="flex flex-col gap-y-2">
          <h2 className="text-[40px] font-extrabold text-white">
            서비스명서비스명
          </h2>
          <p className="text-[24px] font-normal text-white">서비스 소개</p>
        </div>
        <div className="flex gap-x-10">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center">
              <h4 className="text-[24px] font-normal text-[#62EFE5] border-r border-[#949494] pr-3 h-[21px] flex items-center">
                기획
              </h4>
              <p className="text-[24px] font-normal text-white pl-3">
                큐밀리, 큐밀리
              </p>
            </div>
            <div className="flex items-center">
              <h4 className="text-[24px] font-normal text-[#62EFE5] border-r border-[#949494] pr-3 h-[21px] flex items-center">
                디자인
              </h4>
              <p className="text-[24px] font-normal text-white pl-3">
                큐밀리, 큐밀리
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center">
              <h4 className="text-[24px] font-normal text-[#62EFE5] border-r border-[#949494] pr-3 h-[21px] flex items-center">
                프론트엔드
              </h4>
              <p className="text-[24px] font-normal text-white pl-3">
                큐밀리, 큐밀리
              </p>
            </div>
            <div className="flex items-center">
              <h4 className="text-[24px] font-normal text-[#62EFE5] border-r border-[#949494] pr-3 h-[21px] flex items-center">
                백엔드
              </h4>
              <p className="text-[24px] font-normal text-white pl-3">
                큐밀리, 큐밀리
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
