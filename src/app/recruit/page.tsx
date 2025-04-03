import React from "react";
import Image from "next/image";
import {Recruit} from "@/components/recruit/Recruit";
import {RecruitQnA} from "@/components/recruit/RecruitQnA";
import {recruitInfoList} from "@/utils/recruit";

async function RecruitPage() {

    return (
        <main>
            <div className="mx-auto flex flex-col gap-y-[100px] items-center w-full max-w-[1180px]">
                <Image
                    src="/recruit/sticker/Arrow.svg"
                    alt="화살표"
                    width={106}
                    height={46}
                    priority
                    style={{width: 106, height: 46}}
                />
                <section className="flex flex-col w-full gap-y-[200px] justify-center items-center">
                    {recruitInfoList.map((item) => (
                        <Recruit title={item.title} key={item.id}>
                            <Recruit.InfoCard  style={
                                item.id === 1 || item.id === 4
                                    ? "contents"
                                    : undefined
                            }>
                                <section>{item.contents}</section>
                            </Recruit.InfoCard>
                        </Recruit>
                    ))}
                </section>
                <Image
                    src="/recruit/sticker/Arrow.svg"
                    alt="화살표"
                    width={106}
                    height={46}
                    priority
                    style={{width: 106, height: 46}}
                />
                <Recruit style={"gap-y-[64px]"} title={"이제 지원해볼게요!"}>
                    <div className={"flex flex-col items-center pb-[120px] gap-y-[64px] "}>
                        <p className={"font-semibold text-[20px] leading-[150%] tracking-[-0.2px] text-center"}>
                            큐시즘 31기 신규 학회원 리크루팅이 시작되었어요. <br />
                            큐시즘과 함께 성장할 열정 가득한 여러분을 기다려요!</p>
                        <button
                            className={"flex gap-x-1 items-center font-semibold text-[20px] px-8 py-4 rounded-full bg-[#0055FF] hover:scale-105 transition cursor-pointer"}
                        >
                            함께하러 가기
                        </button>
                    </div>
                </Recruit>
            </div>
            <RecruitQnA />
        </main>
    );
}

export default RecruitPage;
