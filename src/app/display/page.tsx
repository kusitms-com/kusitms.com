import Image from "next/image";
import { DisplayListContainer } from "@/components/display";
import { getMeetupProjects } from "@/service/projects";

async function DisplayPage() {
  const meetupProjectList = await getMeetupProjects("31", "");

  return (
    <div className="w-full flex flex-col items-center gap-y-12 py-80 relative">
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
        <div className="flex flex-col items-center gap-y-9 mt-[140px]">
          <h3 className="px-8 py-2 bg-[#05F] font-extrabold text-[28px] text-white w-[250px] mx-auto text-center rounded-full">
            OT
          </h3>
          <div className="flex items-center gap-x-5">
            <Image
              src="/display/ot_1.png"
              alt="ot"
              width={640}
              height={360}
              className="w-[640px] h-[360px]"
            />
            <Image
              src="/display/ot_2.png"
              alt="ot"
              width={640}
              height={360}
              className="w-[640px] h-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-9 mt-[140px]">
          <h3 className="px-8 py-2 bg-[#05F] font-extrabold text-[28px] text-white w-[250px] mx-auto text-center rounded-full">
            기업 프로젝트
          </h3>
          <div className="flex items-center gap-x-5">
            <Image
              src="/display/corporate_1.jpg"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
            <Image
              src="/display/corporate_2.jpg"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
            <Image
              src="/display/corporate_3.jpg"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-9 mt-[140px]">
          <h3 className="px-8 py-2 bg-[#05F] font-extrabold text-[28px] text-white w-[250px] mx-auto text-center rounded-full">
            전문가 초청 강연
          </h3>
          <div className="flex items-center gap-x-5">
            <Image
              src="/display/invitation_1.png"
              alt="ot"
              width={640}
              height={360}
              className="w-[640px] h-[360px]"
            />
            <Image
              src="/display/invitation_2.png"
              alt="ot"
              width={640}
              height={360}
              className="w-[640px] h-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-9 mt-[140px]">
          <h3 className="px-8 py-2 bg-[#05F] font-extrabold text-[28px] text-white w-[250px] mx-auto text-center rounded-full">
            MT
          </h3>
          <div className="flex items-center gap-x-5">
            <Image
              src="/display/mt_1.png"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
            <Image
              src="/display/mt_2.png"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
            <Image
              src="/display/mt_3.png"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-9 mt-[140px]">
          <h3 className="px-8 py-3 bg-[#05F] font-extrabold text-[28px] text-white w-[250px] mx-auto text-center rounded-full">
            OB 초청 데이
          </h3>
          <div className="flex items-center gap-x-5">
            <Image
              src="/display/ob_1.png"
              alt="ot"
              width={640}
              height={360}
              className="w-[640px] h-[360px]"
            />
            <Image
              src="/display/ob_2.png"
              alt="ot"
              width={640}
              height={360}
              className="w-[640px] h-[360px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-9 mt-[140px]">
          <h3 className="px-8 py-2 bg-[#05F] font-extrabold text-[28px] text-white w-[250px] mx-auto text-center rounded-full">
            밋업 프로젝트
          </h3>
          <div className="flex items-center gap-x-5">
            <Image
              src="/display/meetup_1.png"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
            <Image
              src="/display/meetup_2.png"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
            <Image
              src="/display/meetup_3.png"
              alt="ot"
              width={381}
              height={381}
              className="w-[381px] h-[381px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DisplayPage;
