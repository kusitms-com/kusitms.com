import Image from "next/image";
import { CarouselBox, DisplayListContainer } from "@/components/display";
import { getMeetupProjectDetail, getMeetupProjects } from "@/service/projects";
import { DISPLAY_SECTIONS } from "@/constants/displayPictureList";

const PROJECT_IDS = ["50", "52", "54", "48", "53", "51", "49", "47"];

async function DisplayPage() {
  const meetupProjectList = await getMeetupProjects("31", "");

  // 모든 프로젝트 상세 정보를 병렬로 가져오기
  const projectDetails = await Promise.all(
    PROJECT_IDS.map((id) => getMeetupProjectDetail(id))
  );

  return (
    <>
      <CarouselBox projectDetails={projectDetails} />
      <div className="w-full flex flex-col items-center gap-y-12 py-20 relative">
        <Image
          src="/display/pageBackgrond.png"
          alt="background"
          width={1920}
          height={1080}
          className="absolute right-0 top-0 w-full h-full object-cover z-0"
        />
        <section className="mx-auto w-full max-w-[1180px] flex flex-col z-10">
          <DisplayListContainer data={meetupProjectList.data} />
          <h2 className="text-5xl font-bold text-white text-center">
            큐밀리들의 31번째 여정
          </h2>
          <section className="w-full flex flex-col items-center">
            {DISPLAY_SECTIONS.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-y-9 mt-[140px]"
              >
                <h3 className="px-8 py-2 bg-[#05F] font-extrabold text-[28px] text-white w-[250px] mx-auto text-center rounded-full">
                  {section.title}
                </h3>
                <div className="flex items-center gap-x-5">
                  {section.images.map((image, imageIndex) => (
                    <Image
                      key={imageIndex}
                      src={image.src}
                      alt={section.title}
                      width={image.width}
                      height={image.height}
                      className={image.className}
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </>
  );
}

export default DisplayPage;
