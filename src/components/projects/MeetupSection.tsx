import Image from "next/image";
import React from "react";
import {
  EventIntro,
  ImageCard,
  NavButtons,
  ProjectContainer,
  ProjectTotalCount,
} from "@/components/projects";
import { getMeetupProjects } from "@/service/projects";

interface MeetupSectionProps {
  projectType: string;
}

export const MeetupSection = async ({ projectType }: MeetupSectionProps) => {
  const meetupProjectList = await getMeetupProjects("");
  return (
    <>
      <section className="w-full max-w-6xl mx-auto py-8 text-center">
        <h1 className="text-5xl font-black mb-4 mt-[180px] leading-[130%]">
          KUSITMS의 다양한 프로젝트를 <br />
          구경해보세요!
        </h1>
        <p className="font-normal text-[20px]">
          <ProjectTotalCount pathname={projectType} />의 프로젝트를 볼 수
          있어요.
        </p>
        <NavButtons />
      </section>
      <section className="mx-auto w-full max-w-[1180px]">
        <div className="flex w-full gap-[90px] mt-[100px] justify-center items-center">
          <ImageCard>
            <ImageCard.Sticker>
              <Image
                src="/projects/sticker/MeetupSticker.svg"
                alt="스티커"
                width={70}
                height={100}
                priority
                style={{ width: 70, height: 100 }}
              />
            </ImageCard.Sticker>
            <ImageCard.Image src="/projects/tmp/meetup_tmpImg.jpeg" />
          </ImageCard>
          <EventIntro type="meetup" />
        </div>
        <ProjectContainer data={meetupProjectList.data} />
      </section>
    </>
  );
};
