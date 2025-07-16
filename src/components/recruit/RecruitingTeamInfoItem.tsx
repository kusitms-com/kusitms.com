import React from "react";

export default function RecruitingTeamInfoItem() {
    return (
        <section
            className={"rounded-[32px] bg-[#2F3038] desktop:w-[1180px] w-[334px] desktop:py-[67px] pt-[60px] pb-[40px]"}
        >
            <div
                className={
                    "flex flex-col gap-y-[40px] items-center justify-center"
                }
            >
                <div className={"flex flex-col desktop:flex-row gap-x-[160px] gap-y-[36px]"}>
                    {["경영총괄팀", "교육기획팀", "대외홍보팀"].map((content) => {
                        return (
                            <div
                                key={content}
                                className={
                                    "font-extrabold text-[24px] leading-[120%] tracking-[0px] text-center"
                                }
                            >
                                {content}
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-y-2">
                    <p
                        className={
                            "text-[#90909A] font-normal text-[16px] leading-[100%] tracking-[-0.5px] text-center"
                        }
                    >
                        * 팀별 인원 수는 매 기수 달라질 수 있어요 :)
                    </p>
                    <p
                        className={
                            "text-[#90909A] font-normal text-[16px] leading-[100%] tracking-[-0.5px] text-center"
                        }
                    >
                        * 운영진도 학회원 활동에 참여해요.
                    </p></div>

            </div>
        </section>
    );
}
