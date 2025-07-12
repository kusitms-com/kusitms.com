import Image from "next/image";
import React from "react";

export default function RecruitmentTargetInfoItem () {

    const recruitItems = [
        {
            icon: { src: "/recruit/icons/Book.svg", alt: "책", width: 50, height: 46 },
            mobileSize: { width: 30, height: 28 },
            text: (
                <>
                    활동 기간 동안 대학생 신분을 유지하는 분 <br />
                    (졸업 유예자, 휴학생, 수료생 포함)
                </>
            ),
        },
        {
            icon: {
                src: "/recruit/icons/Calendar.svg",
                alt: "캘린더",
                width: 44,
                height: 51,
            },
            mobileSize: { width: 26, height: 30 },
            text: (
                <>
                    매주 토요일 서울 지역에서 <br />
                    진행되는 세션에 빠짐없이 참석 가능한 분
                </>
            ),
        },
        {
            icon: {
                src: "/recruit/icons/Ranking.svg",
                alt: "스티커",
                width: 49,
                height: 50,
            },
            mobileSize: { width: 29, height: 30 },
            text: (
                <>
                    활동 기간 동안 운영진 활동 및 힉회 활동에 <br />
                    적극적으로 참석 가능한 분
                </>
            ),
        },
    ];

    return (
        <section className="flex flex-col desktop:flex-row w-full gap-x-[20px] justify-center items-center gap-y-[40px]">
            {recruitItems.map((item, index) => (
                <section key={index} className="relative desktop:pt-[50px] pt-[30px]">
                    <div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white desktop:rounded-[32px] rounded-[20px] desktop:w-[100px] desktop:h-[100px] w-[60px] h-[60px]">
                        <div className="block desktop:hidden">
                            <Image
                                src={item.icon.src}
                                alt={item.icon.alt}
                                width={item.mobileSize.width}
                                height={item.mobileSize.height}
                                priority
                            />
                        </div>
                        <div className="hidden desktop:block">
                            <Image
                                src={item.icon.src}
                                alt={item.icon.alt}
                                width={item.icon.width}
                                height={item.icon.height}
                                priority
                            />
                        </div>
                    </div>
                    <div
                        className={"rounded-[32px] bg-[#2F3038] desktop:w-[380px] w-[334px] desktop:pb-[63px] pb-[46px] desktop:pt-[90px] pt-[67px]"}
                    >
                    <p className="font-normal desktop:text-[20px] text-[16px] leading-[100%] tracking-[-0.2px] leading-relaxed text-center">
                            {item.text}
                        </p>
                    </div>
                </section>
            ))}
        </section>
    );
}
