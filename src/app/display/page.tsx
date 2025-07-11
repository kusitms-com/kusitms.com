import Image from "next/image";
import CarouselBox from "@/components/display/CarouselBox";
import DisplayListContainer from "@/components/display/DisplayListContainer";
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
      <section className="flex justify-start gap-y-12 display-gradient relative overflow-hidden">
        <Image
          src="/display/displayBackground.png"
          alt="KUSITMS 31ST EXHIBITON"
          width={1018}
          height={472}
          className="absolute right-0 top-0 w-[1018px] h-[472px] object-cover z-0 hidden desktop:block"
        />
        <Image
          src="/display/mobileBanner.svg"
          alt="KUSITMS 31ST EXHIBITON"
          width={1018}
          height={472}
          className=" w-full object-cover z-0 desktop:hidden"
        />
        <div className="desktop:flex flex-col gap-y-5 mt-22 mb-22 relative z-10 hidden">
          <h1 className="font-extrabold text-[42px] text-white px-9 py-5">
            KUSITMS 31ST EXHIBITON
          </h1>
          <Image
            src="/display/banner.png"
            alt="KUSITMS 31ST EXHIBITON"
            width={1152}
            height={207}
            className="w-[1157px] h-[207px]"
          />
        </div>
        <div className="absolute right-0 bottom-0 px-9 py-5 bg-black hidden desktop:block">
          <h2 className="text-4xl font-semibold text-white">
            Starting Point For Challengers
          </h2>
        </div>
      </section>
      <main className="w-full flex flex-col items-center desktop:gap-y-12">
        <CarouselBox projectDetails={projectDetails} />
        <div className="w-full flex flex-col items-center desktop:gap-y-12 py-20 relative">
          <Image
            src="/display/pageBackgrond.png"
            alt="background"
            width={1920}
            height={1080}
            className="absolute right-0 top-0 w-full h-full object-cover z-0 hidden desktop:block"
          />
          <section className="mx-auto w-full max-w-[1180px] flex flex-col z-10">
            <DisplayListContainer data={meetupProjectList.data} />
            <h2 className="desktop:text-5xl text-2xl font-bold text-white text-center">
              큐밀리들의 31번째 여정
            </h2>
            <section className="w-full flex flex-col items-center px-5">
              {DISPLAY_SECTIONS.map((section, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-y-9 desktop:mt-[140px] mt-[70px]"
                >
                  <h3 className="desktop:px-8 px-4 desktop:py-4 py-2 bg-[#05F] font-extrabold desktop:text-2xl text-sm text-white desktop:w-[250px] w-[140px] mx-auto text-center rounded-full">
                    {section.title}
                  </h3>
                  <div className="flex desktop:flex-row flex-col items-center gap-x-5 gap-y-5">
                    {section.images.map((image, imageIndex) => (
                      <Image
                        key={imageIndex}
                        src={image.src}
                        alt={section.title}
                        width={image.mobileWidth}
                        height={image.mobileHeight}
                        className={`${image.className} desktop:w-[${image.width}px] desktop:h-[${image.height}px] w-[${image.mobileWidth}px] h-[${image.mobileHeight}px]`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

export default DisplayPage;
