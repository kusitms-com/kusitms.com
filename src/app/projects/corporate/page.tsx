import React from "react";
import Image from "next/image";
import CorporateProjectContainer from "@/components/projects/CorporateProjectContainer";
import EventIntro from "@/components/projects/EventIntro";
import ImageCard from "@/components/projects/ImageCard";
import ProjectTotalCount from "@/components/projects/ProjectTotalCount";
import NavButtons from "@/components/projects/NavButtons";
import { getCorporateProjects } from "@/service/projects";
import TopScrollButton from "@/components/shared/TopScrollButton";

async function CorporateProjectPage() {
  const corporateProjectsList = await getCorporateProjects("");

  return (
    <>
      <section className="w-full max-w-6xl mx-auto py-8 text-center">
        <h1 className="text-2xl desktop:text-5xl font-black mb-4 desktop:mt-[180px] mt-[80px] leading-[130%]">
          KUSITMS의 다양한 프로젝트를 <br />
          구경해보세요!
        </h1>
        <p className="font-normal text-[20px]">
          <ProjectTotalCount pathname="corporate" />의 프로젝트를 볼 수 있어요.
        </p>
        <NavButtons />
      </section>
      <section className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col desktop:flex-row w-full desktop:gap-[90px] gap-[40px] desktop:mt-[100px] mt-[40px] justify-center items-center">
          <h2 className="text-white text-[24px] font-bold desktop:hidden block">
            기업 프로젝트란?
          </h2>
          <ImageCard>
            <ImageCard.Sticker>
              <Image
                src="/projects/sticker/CompanyProjectSticker.svg"
                alt="스티커"
                width={70}
                height={100}
                priority
                style={{ width: 70, height: 100 }}
              />
            </ImageCard.Sticker>
            <ImageCard.Image src="/projects/tmp/company_tmpImg.jpeg" />
          </ImageCard>
          <EventIntro type="corporate" />
        </div>
        <CorporateProjectContainer data={corporateProjectsList.data} />
        <TopScrollButton />
      </section>
    </>
  );
}

export default CorporateProjectPage;
