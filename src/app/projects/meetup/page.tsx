import Image from "next/image";
import React from "react";
import ImageCard from "@/components/projects/ImageCard";
import EventIntro from "@/components/projects/EventIntro";

function MeetupPage() {
  return (
    <section className="flex w-full max-w-[1180px] gap-[90px] mt-[100px] justify-center items-center">
      <ImageCard>
        <ImageCard.Sticker>
          <Image
            src="/projects/sticker/MeetupSticker.svg"
            alt="스티커"
            width={70}
            height={100}
            priority
          />
        </ImageCard.Sticker>
        <ImageCard.Image src="/projects/tmp/meetup_tmpImg.jpeg" />
      </ImageCard>
      <EventIntro type="meetup" />
    </section>
  );
}

export default MeetupPage;
