import Image from "next/image";
import React from "react";
import { EventIntro, ImageCard, ProjectContainer } from "@/components/projects";
import { getMeetupProjects } from "@/service/projects";

export const MeetupPage = async () => {
  const meetupProjectList = await getMeetupProjects("desc");
  return (
    <>
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
    </>
  );
};
