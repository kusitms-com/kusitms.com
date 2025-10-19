import React from "react";

export default function MeetingInfoItem() {
  return (
    <section
      className={
        "rounded-[32px] bg-[#2F3038] desktop:w-[1180px] w-[334px] desktop:py-[55px] py-[40px]"
      }
    >
      <div className={"flex flex-col gap-y-[40px] items-center justify-center"}>
        <div className="flex flex-col items-center justify-center gap-y-[20px]">
          <div className="flex gap-x-3 items-center font-extrabold desktop:text-[24px] text-[20px] tracking-[0px] text-center leading-relaxed">
            <span className="desktop:text-[20px] text-[16px] font-bold text-[#5D5E67]">일시</span>
            매주 토요일 13시 ~ 17시 <br />
          </div>
          <div className="flex gap-x-3 items-center font-extrabold desktop:text-[24px] text-[20px] tracking-[0px] text-center leading-relaxed">
            <span className="desktop:text-[20px] text-[16px] font-bold text-[#5D5E67]">장소</span>
            서울 지역 내
          </div>
        </div>

        <div className="flex flex-col gap-y-2 desktop:flex-row gap-x-1">
          <p className="text-[#90909A] font-normal text-[16px] leading-[100%] tracking-[-0.5px] text-center">
            * 활동 장소와 시간은
          </p>
          <p className="text-[#90909A] font-normal text-[16px] leading-[100%] tracking-[-0.5px] text-center">
            커리큘럼에 따라 변경될 수 있어요 :)
          </p>
        </div>
      </div>
    </section>
  );
}
