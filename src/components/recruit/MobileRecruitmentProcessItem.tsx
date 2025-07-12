import React from "react";
import Image from "next/image";

export default function MobileRecruitmentProcessItem() {
    return (
        <section className="relative block desktop:hidden flex flex-col items-center justify-center gap-y-[40px]">
            <section className="flex relative gap-x-[45px]">
                <div key={"서류 지원 기간"} className="relative flex">
                    <div className="flex flex-col items-center">
                        <div
                            className="relative rounded-full p-5"
                        >
                            <div
                                className="relative z-10 flex justify-center items-center w-[120px] h-[120px] rounded-full bg-white">
                                <p
                                    className="font-[SUIT] font-medium text-[16px] leading-[100%] tracking-[0px] text-center text-[#0055FF]"
                                >
                                    서류 지원 기간
                                </p>
                            </div>
                        </div>
                        <div className="h-[6px] bg-[#0055FF] w-[28px] mt-[30px] mb-[24px]"/>
                        <p
                            className={
                                "font-medium text-[14px] leading-[150%] tracking-[-0.5px] text-center"
                            }
                        >
                            7월 10일(목) ~ 7월 17일(수)
                            <br/>
                            자정 마감
                        </p>
                    </div>
                </div>

                <section className="absolute left-[45%] top-[25%] flex items-center">
                    <Image
                        className={""}
                        src={"/recruit/icons/BlueArrow.svg"}
                        alt={"파란색 화살표"}
                        width={32}
                        height={32}
                    />
                </section>

                <section key={"서류 합격 발표"} className="relative">
                    <div className="flex flex-col items-center">
                        <div
                            className="relative rounded-full p-5"
                        >
                            <div
                                className="relative z-10 flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#0055FF]">
                                <p
                                    className="font-[SUIT] font-medium text-[16px] leading-[100%] tracking-[0px] text-center text-white"
                                >
                                    서류 합격 발표
                                </p>
                            </div>
                        </div>
                        <div className="h-[6px] bg-[#0055FF] w-[28px] mt-[30px] mb-[24px]"/>
                        <p
                            className={
                                "font-medium text-[14px] leading-[150%] tracking-[-0.5px] text-center"
                            }
                        >
                            7월 17일(목)  <br/>
                            합격자/불합격자 전체 연락
                        </p>
                    </div>
                </section>
            </section>

            <section className="flex items-center w-full justify-end px-[60px]">
                <Image
                    className="rotate-90"
                    src={"/recruit/icons/BlueArrow.svg"}
                    alt={"파란색 화살표"}
                    width={32}
                    height={32}
                />
            </section>

            <section className="flex relative gap-x-[45px]">
                <div key={"최종 합격 발표"} className="relative flex">
                    <div className="flex flex-col items-center">
                        <div
                            className="relative rounded-full p-5"
                        >
                            <div
                                className="relative z-10 flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#0055FF]">
                                <p
                                    className="font-[SUIT] font-medium text-[16px] leading-[100%] tracking-[0px] text-center text-white"
                                >
                                    최종 합격 발표
                                </p>
                            </div>
                        </div>
                        <div className="h-[6px] bg-[#0055FF] w-[28px] mt-[30px] mb-[24px]"/>
                        <p
                            className={
                                "font-medium text-[14px] leading-[150%] tracking-[-0.5px] text-center"
                            }
                        >
                            7월 21일(일) <br/>
                            합격자/불합격자 전체 연락
                        </p>
                    </div>
                </div>

                <section className="absolute left-[45%] top-[25%] flex items-center">
                    <Image
                        className="rotate-180"
                        src={"/recruit/icons/BlueArrow.svg"}
                        alt={"파란색 화살표"}
                        width={32}
                        height={32}
                    />
                </section>

                <section key={"면접 기간"} className="relative flex">
                    <div className="flex flex-col items-center">
                        <div
                            className="relative rounded-full p-5"
                        >
                            <div
                                className="relative z-10 flex justify-center items-center w-[120px] h-[120px] rounded-full bg-white">
                                <p
                                    className="font-[SUIT] font-medium text-[16px] leading-[100%] tracking-[0px] text-center text-[#0055FF]"
                                >
                                    면접 기간
                                </p>
                            </div>
                        </div>
                        <div className="h-[6px] bg-[#0055FF] w-[28px] mt-[30px] mb-[24px]"/>
                        <p
                            className={
                                "font-medium text-[14px] leading-[150%] tracking-[-0.5px] text-center"
                            }
                        >
                            7월 19일(토) ~ 7월 20일(일) <br/>
                            서류 합격자 개별 안내
                        </p>
                    </div>
                </section>
            </section>

            <section className="flex gap-x-[136px]">
                <section className=" flex items-center">
                    <Image
                        className={"rotate-60"}
                        src={"/recruit/icons/BlueArrow.svg"}
                        alt={"파란색 화살표"}
                        width={32}
                        height={32}
                    />
                </section>
                <section className=" flex items-center">
                    <Image
                        className={"rotate-120 scale-y-[-1]"}
                        src={"/recruit/icons/BlueArrow.svg"}
                        alt={"파란색 화살표"}
                        width={32}
                        height={32}
                    />
                </section>
            </section>


            <section className="flex flex-col relative items-center justify-center">
                <div
                    className="absolute w-[154px] h-[154px] rounded-full bg-[#0055FF] top-1 opacity-20 z-0"/>
                <section key={"32기 활동"} className="relative flex">
                    <div className="flex flex-col items-center">
                        <div
                            className="relative rounded-full p-5"
                        >
                            <div
                                className="relative z-10 flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#0055FF]">
                                <p
                                    className="font-[SUIT] font-medium text-[16px] leading-[100%] tracking-[0px] text-center text-white"
                                >
                                    32기 활동
                                </p>
                            </div>
                        </div>
                        <div className="h-[6px] bg-[#0055FF] w-[28px] mt-[30px] mb-[24px]"/>
                        <p
                            className={
                                "font-medium text-[14px] leading-[150%] tracking-[-0.5px] text-center"
                            }
                        >
                            8월 9일(토) ~ 12월 6일(토)
                        </p>
                    </div>
                </section>
            </section>
        </section>
    );
}
