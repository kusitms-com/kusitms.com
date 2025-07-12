import React from "react";

export default function RecruitingTeamInfoItem() {
    return (
        <section
            className={"rounded-[32px] bg-[#2F3038] w-[1180px] py-[67px]"}
        >
            <div
                className={
                    "flex flex-col gap-y-[40px] items-center justify-center"
                }
            >
                <div className={"flex gap-x-[160px]"}>
                    {["기획", "개발", "디자인"].map((content) => {
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
                <p
                    className={
                        "text-[#90909A] font-normal text-[16px] leading-[100%] tracking-[-0.5px] text-center"
                    }
                >
                    2025.01.16~2025.01.25 31기 학회원 모집중이에요 :)
                </p>
            </div>
        </section>
    );
}
