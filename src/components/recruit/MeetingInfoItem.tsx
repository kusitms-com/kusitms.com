import React from "react";

export default function MeetingInfoItem() {
    return (
        <section
            className={"rounded-[32px] bg-[#2F3038] w-[1180px] py-[55px]"}
        >
            <div
                className={
                    "flex flex-col gap-y-[40px] items-center justify-center"
                }
            >
                <p
                    className={
                        "font-extrabold text-[24px] leading-[120%] tracking-[0px] text-center"
                    }
                >
                    일시: 매주 토요일 12시 ~ 18시 <br/>
                    장소: 서울 지역 내
                </p>
                <p
                    className={
                        "text-[#90909A] font-normal text-[16px] leading-[100%] tracking-[-0.5px] text-center"
                    }
                >
                    * 활동 장소와 시간은 커리큘럼에 따라 변경될 수 있어요 :)
                </p>
            </div>
        </section>
    );
}
