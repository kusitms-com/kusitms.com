import Image from "next/image";
import React from "react";
import { getMeetupProjects } from "@/service/projects";
import { Card, EventIntro, Filter, ImageCard } from "@/components/projects";

async function MeetupPage() {
  const meetupProjectList = await getMeetupProjects();

  return (
    <section className=" w-full max-w-[1180px]">
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
      <div className="w-full mt-[100px]">
        <Filter />
        <div className="grid grid-cols-3 gap-5">
          {meetupProjectList.data.meetup_list.map((project) => (
            <Card key={project.meetup_id}>
              <Card.Poster src={project.poster_url} />
              <Card.Logo src={project.logo_url} />
              <Card.Info>
                <Card.Cardinal>{project.cardinal}기</Card.Cardinal>
                <Card.ProjectName>{project.name}</Card.ProjectName>
                <Card.ContentIntro>{project.one_line_intro}</Card.ContentIntro>
                <Card.CategoryContainer>
                  {project.instagram_url && (
                    <Card.Instagram href={project.instagram_url} />
                  )}
                  {project.github_url && (
                    <Card.Github href={project.github_url} />
                  )}
                  {project.app_url && <Card.Link href={project.app_url} />}
                </Card.CategoryContainer>
              </Card.Info>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetupPage;
