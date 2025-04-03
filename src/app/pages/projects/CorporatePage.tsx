import Image from "next/image";
import {
  CorporateProjectContainer,
  EventIntro,
  ImageCard,
} from "@/components/projects";
import { getCorporateProjects } from "@/service/projects";

export const CorporatePage = async () => {
  const corporateProjectsList = await getCorporateProjects("desc");

  return (
    <>
      <div className="flex w-full gap-[90px] mt-[100px] justify-center items-center">
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
    </>
  );
};
