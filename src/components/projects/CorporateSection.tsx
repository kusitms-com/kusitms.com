import Image from "next/image";
import {
  CorporateProjectContainer,
  EventIntro,
  ImageCard,
  ProjectTotalCount,
} from "@/components/projects";
import { getCorporateProjects } from "@/service/projects";
import NavButtons from "./NavButtons";

interface CorporateSectionProps {
  projectType: string;
}

export const CorporateSection = async ({
  projectType,
}: CorporateSectionProps) => {
  const corporateProjectsList = await getCorporateProjects("");

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
      </section>
    </>
  );
};
