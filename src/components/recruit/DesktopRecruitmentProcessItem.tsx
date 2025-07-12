import Image from "next/image";
import React from "react";

export default function DesktopRecruitmentProcessItem() {

    const recruitmentProcess = [
        {
            title: "서류 지원 기간",
            notice: (
                <p
                    className={
                        "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
                    }
                >
                    7월 10일(목) ~ 7월 17일(수)
                    <br />
                    자정 마감
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
                    7월 17일(목) 합격자/불합격자 <br />
                    전체 연락
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
                    7월 19일(토) ~ 7월 20일(일) <br />
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
                    7월 21일(일) <br />
                    합격자/불합격자 전체 연락
                </p>
            ),
        },
        {
            title: "32기 활동",
            notice: (
                <p
                    className={
                        "font-semibold text-[16px] leading-[150%] tracking-[-0.5px] text-center"
                    }
                >
                    8월 9일(토) ~ 12월 6일(토)
                </p>
            ),
        },
    ];

    return (
        <section className="hidden desktop:block desktop:flex flex-col">
            <div className="flex">
                {recruitmentProcess.map((process, index) => {
                    return (
                        <div key={process.title} className="relative flex pr-9">
                            <div className="flex flex-col items-center">
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
                                <div className="h-[6px] bg-[#0055FF] w-[28px] mt-5 mb-10"/>
                                {process.notice}
                            </div>
                            <div className="absolute right-0 top-[25%] flex items-center">
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
