/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: only inserting a controlled <br/>*/
import React from "react";

export default function RecruitingTeamInfoItem() {
  return (
    <section
      className={
        "rounded-[32px] bg-[#2F3038] desktop:w-[1180px] w-[334px] desktop:py-[67px] pt-[60px] pb-[40px]"
      }
    >
      <div className={"flex flex-col gap-y-[40px] items-center justify-center"}>
        <div
          className={
            "flex flex-col desktop:flex-row gap-x-[100px] gap-y-[36px] items-center"
          }
        >
          {["기획", "디자인", "개발<br/>(프론트엔드,백엔드)"].map(
            (content, idx) => {
              return (
                <div
                  key={idx}
                  className={`${
                    content === "디자인"
                      ? "desktop:ml-35"
                      : content === "개발<br/>(프론트엔드,백엔드)"
                      ? "desktop:ml-10"
                      : ""
                  } font-extrabold text-[24px] leading-[120%] tracking-[0px] text-center`}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              );
            }
          )}
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
          </p>
        </div>
      </div>
    </section>
  );
}
