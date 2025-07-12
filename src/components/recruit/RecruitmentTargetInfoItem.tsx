import Image from "next/image";
import React from "react";

export default function RecruitmentTargetInfoItem () {

    const recruitItems = [
        {
            icon: { src: "/recruit/icons/Book.svg", alt: "책", width: 50, height: 46 },
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
            text: (
                <>
                    활동 기간 동안 운영진 활동 및 힉회 활동에 <br />
                    적극적으로 참석 가능한 분
                </>
            ),
        },
    ];

    return (
        <section className="flex w-full gap-x-[20px] justify-center items-center">
            {recruitItems.map((item, index) => (
                <div key={index} className="relative pt-[50px]">
                    <div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white rounded-[32px] w-[100px] h-[100px]">
                        <Image
                            src={item.icon.src}
                            alt={item.icon.alt}
                            width={item.icon.width}
                            height={item.icon.height}
                            priority
                            style={{width: item.icon.width, height: item.icon.height}}
                        />
                    </div>
                    <div
                        className={"rounded-[32px] bg-[#2F3038] w-[380px] pb-[63px] pt-[90px]"}
                    >
                        <p className="font-normal text-[20px] leading-[100%] tracking-[-0.2px] text-center">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
