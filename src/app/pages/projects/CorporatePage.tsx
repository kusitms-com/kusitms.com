import Image from "next/image";
import { Card, EventIntro, Filter, ImageCard } from "@/components/projects";
import { getCorporateProjects } from "@/service/projects";

export const CorporatePage = async () => {
  const corporateProjectsList = await getCorporateProjects();

  return (
    <section className=" w-full max-w-[1180px]">
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
      <div className="w-full mt-[100px]">
        <Filter />
        <div className="grid grid-cols-3 gap-5">
          {corporateProjectsList.data.corporateList.map((project) => (
            <Card key={project.corporate_id}>
              <Card.Poster src={project.banner_url.trim()} />
              <Card.Logo src={project.logo_url} />
              <Card.Info>
                <Card.Cardinal>{project.cardinal}기</Card.Cardinal>
                <Card.ProjectName>{project.name}</Card.ProjectName>
                <Card.ContentIntro>{project.content}</Card.ContentIntro>
                <Card.CategoryContainer>
                  {project.category.map((category, index) => (
                    <Card.Category key={index}>{category}</Card.Category>
                  ))}
                </Card.CategoryContainer>
              </Card.Info>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
