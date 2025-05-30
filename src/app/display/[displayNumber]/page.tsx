import Image from "next/image";
import {
    getMeetupProjectDetail,
    getMeetupProjects,
} from "@/service/projects";
import {IconLink} from "@/components/shared";
import {toUpperCaseOnlyLetters} from "@/utils";
import {ProjectNavigation} from "@/components/projectDetail";

export async function generateStaticParams() {
    const meetupProjectList = await getMeetupProjects("");
    return meetupProjectList.data.meetup_list.map((project) => ({
        projectNumber: project.meetup_id,
    }));
}

const DisplayDetailPage = async ({params}: Readonly<{
    params: Promise<{ displayNumber: string }>;
}>) => {
    const { displayNumber } = await params;
    const projectList = await getMeetupProjects("");
    const projectDetail = await getMeetupProjectDetail(displayNumber);

    const currentIndex = projectList.data.meetup_list.findIndex(
        (item) => item.meetup_id.toString() === displayNumber
    );

    const nextId =
        projectList.data.meetup_list[currentIndex + 1]?.meetup_id.toString();
    const prevId =
        projectList.data.meetup_list[currentIndex - 1]?.meetup_id.toString();

    const team = projectDetail?.data.team;
    const renderTeamSection = (role: string, members: string[]) => (
        <p>
            <span className="text-[18px] text-[#CCC]">{role} |</span>
            {" " + members.join(", ")}
        </p>
    );

    return (
        <>
            <ProjectNavigation prevId={prevId} nextId={nextId} domain={"/display"}/>
            <div className="relative w-[1180px] h-[663px] mt-[180px]">
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-b from-transparent to-[#ffffff80] rounded-b-[20px] z-10" />
                <Image src={projectDetail.data.poster_url} className="object-cover rounded-[20px]" fill alt="poster" />
                <div className="flex flex-col absolute bottom-10 left-[45px] z-10">
                    <h2 className="text-[48px] font-black text-black">{projectDetail.data.name}</h2>
                    <p className="text-[24px] text-black">{projectDetail.data.one_line_intro}</p>
                </div>

                <div className="absolute flex gap-x-[16px] z-10 bottom-[30px] right-[40px]">
                    {projectDetail.data.behance_url && (
                        <IconLink
                            className="w-[52px] h-[52px] rounded-2xl"
                            size={35}
                            img="/projects/icons/BehanceIcon.svg"
                            link={projectDetail.data.behance_url}
                        />
                    )}
                    {projectDetail.data.github_url && (
                        <IconLink
                            className="w-[52px] h-[52px] rounded-2xl"
                            size={35}
                            img="/projects/icons/GithubIcon.svg"
                            link={projectDetail.data.github_url}
                        />
                    )}
                    {projectDetail.data.app_url && (
                        <IconLink
                            className="w-[52px] h-[52px] rounded-2xl"
                            size={25}
                            img="/projects/icons/DetailLinkIcon.svg"
                            link={projectDetail.data.app_url}
                        />
                    )}
                </div>
            </div>

            <div className="flex gap-x-5 w-[1180px] mt-5 pb-[30px]">
                <section className="w-full bg-[#5D5E67] p-10 rounded-[24px]">
                    <div className="flex gap-2 border-b border-dashed border-[#ccc] mb-6 items-start ">
                        <Image
                            src="/projects/icons/Summation.svg"
                            className="pt-2"
                            alt="프로젝트 요약"
                            width={20}
                            height={25}
                        />
                        <h3 className="text-2xl font-extrabold mb-4">프로젝트 요약</h3>
                    </div>

                    <div className="flex gap-8">
                        <div className="text-xl font-normal flex flex-col gap-5">
                            {[
                                ["/projects/icons/Horseman.svg", "진행기수"],
                                ["/projects/icons/Project.svg", "프로젝트 형태"],
                                ["/projects/icons/Watch.svg", "프로젝트 기간"],
                                ["/projects/icons/Human.svg", "팀 구성"],
                            ].map(([src, alt], i) => (
                                <div key={i} className="flex gap-2">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={24}
                                        height={24}
                                        style={{width: "24px", height: "24px"}}
                                    />
                                    <p>{alt}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-[#E2E2EB] text-xl font-normal flex flex-col gap-5">
                            <p>{projectDetail.data.cardinal}기</p>
                            <p>{toUpperCaseOnlyLetters(projectDetail.data.type)}</p>
                            <p>{`(${projectDetail.data.start_date} ~ ${projectDetail.data.end_date})`}</p>
                            {renderTeamSection("기획", team.planner)}
                            {renderTeamSection("디자인", team.designer)}
                            {team.frontend &&
                                renderTeamSection("프론트엔드", team.frontend)}
                            {team.ios && renderTeamSection("IOS", team.ios)}
                            {team.aos && renderTeamSection("AOS", team.aos)}
                            {renderTeamSection("백엔드", team.backend)}
                        </div>
                    </div>
                </section>
                <section className="p-10 bg-[#292D32] w-full rounded-[24px]">
                    <div className="flex gap-2 border-b border-dashed border-[#ccc] mb-6 items-start">
                        <Image
                            src="/projects/icons/Explanation.svg"
                            className="pt-2"
                            alt="프로젝트 설명"
                            width={24}
                            height={24}
                        />
                        <h3 className="text-2xl font-extrabold mb-4">프로젝트 설명</h3>
                    </div>
                    <p className="text-xl font-normal overflow-y-auto custom-scrollbar-none h-[180px]">
                        {projectDetail.data.intro}
                    </p>
                </section>
            </div>
        </>
    );
};
export default DisplayDetailPage;
