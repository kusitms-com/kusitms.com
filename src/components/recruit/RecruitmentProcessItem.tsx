import Image from "next/image";
import React from "react";

export default function RecruitmentProcessItem() {
    const recruitmentProcess = [
        {
            title: "서류 지원 기간",
            notice: (
                <p
                    className={
                        "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
                    }
                >
                    1월 16일(목) ~ 1월 25일(토)
                    <br />
                    23:59 마감
                </p>
            ),
        },
        {
            title: "서류 합격 발표",
            notice: (
                <p
                    className={
                        "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
                    }
                >
                    1월 28일(화) 합격자/불합격자 <br />
                    개별 연락
                </p>
            ),
        },
        {
            title: "면접 기간",
            notice: (
                <p
                    className={
                        "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
                    }
                >
                    2월 1일(토) ~ 2월 2일(일) <br />
                    서류 합격자 개별 안내
                </p>
            ),
        },
        {
            title: "최종 합격 발표",
            notice: (
                <p
                    className={
                        "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
                    }
                >
                    2월 9일(일) <br />
                    합격자/불합격자 개별 연락
                </p>
            ),
        },
        {
            title: "31기 활동",
            notice: (
                <p
                    className={
                        "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
                    }
                >
                    선발 직후 ~ 6월 첫째 주 주말
                </p>
            ),
        },
    ];


    return (
        <section className={"flex flex-col"}>
            <div className={"flex"}>
                {recruitmentProcess.map((process, index) => {
                    return (
                        <div key={process.title} className={"relative flex pr-9"}>
                            <div className={"flex flex-col items-center"}>
                                <div
                                    className={
                                        index === recruitmentProcess.length - 1
                                            ? "relative rounded-full"
                                            : "relative rounded-full p-5"
                                    }
                                >
                                    {index === recruitmentProcess.length - 1 && (
                                        <div
                                            className="absolute w-[220px] h-[220px] rounded-full bg-[#0055FF] opacity-20 z-0"/>
                                    )}
                                    <div
                                        className={`relative z-10 flex justify-center items-center w-[172px] h-[172px] rounded-full 
                                            ${
                                            index % 2 === 0
                                                ? index ===
                                                recruitmentProcess.length - 1
                                                    ? "bg-[#0055FF] opacity-100 m-6"
                                                    : "bg-white"
                                                : "bg-[#0055FF] opacity-100"
                                        }`}
                                    >
                                        <p
                                            className={`font-[SUIT] font-extrabold text-[20px] leading-[100%] tracking-[0px] text-center 
                                            ${
                                                index % 2 === 0
                                                    ? index ===
                                                    recruitmentProcess.length - 1
                                                        ? "text-white"
                                                        : "text-[#0055FF]"
                                                    : "text-white"
                                            }`}
                                        >
                                            {process.title}
                                        </p>
                                    </div>
                                </div>
                                <div className={"h-[6px] bg-[#0055FF] w-[28px] mt-5 mb-10"}/>
                                {process.notice}
                            </div>
                            <div className={"absolute right-0 top-[25%] flex items-center"}>
                                {index !== recruitmentProcess.length - 1 && (
                                    <Image
                                        className={""}
                                        src={"/recruit/icons/BlueArrow.svg"}
                                        alt={"파란색 화살표"}
                                        width={32}
                                        height={32}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
