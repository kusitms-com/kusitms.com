import Image from "next/image";
import { useId } from "react";
import { PARTNERS } from "@/constants/partners";
import { cn } from "@/lib/utils";

// 굵은 검정 워드마크라 같은 높이에서 혼자 커 보이는 로고는 높이를 따로 준다
const LOGO_SIZE: Record<string, string> = {
  "/main/img/partner/Gabia.svg": "h-[10px] desktop:h-[30px]",
};

/** 피그마 KUSITMS 파트너사(데스크톱 614:18290, 모바일 614:18138). 로고 목록은 사이트가 관리하는 PARTNERS 상수를 쓴다. */
export default function PartnersSection() {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="bg-linear-to-b from-[#e6f0f9] from-[4.82%] to-[#f9fafb] to-[108.77%] py-[100px] desktop:pt-[392px] desktop:pb-[72px]"
    >
      <div className="flex flex-col gap-9 desktop:gap-12">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-5 text-center desktop:items-start desktop:px-0 desktop:gap-12 desktop:text-left">
          <p className="text-[16px] leading-6 font-bold tracking-[-0.0025em] text-brand-primary desktop:text-[20px] desktop:leading-8 desktop:tracking-[-0.008em]">
            PARTNERS
          </p>
          <div className="flex flex-col gap-1 desktop:gap-3">
            <h2
              id={headingId}
              className="text-[24px] leading-9 font-bold tracking-[-0.008em] text-label-normal desktop:text-[48px] desktop:leading-[62px] desktop:tracking-[-0.018em]"
            >
              KUSITMS 파트너사
            </h2>
            <p className="text-[14px] leading-5 tracking-[0.0125em] text-label-netural desktop:text-[18px] desktop:leading-[26px] desktop:font-medium desktop:tracking-[-0.005em] desktop:text-label-alternative">
              큐시즘과 함께 청년 IT경영의 내일을 만들어갈 다양한 후원사를 기다립니다. 여러분의
              후원이 IT경영의 미래를 만듭니다
            </p>
          </div>
        </div>
        {/* 로고 띠는 제목과 같은 콘텐츠 폭(1200px, 모바일 좌우 20px)에 맞춘다(시안 944px 창에서 변경). 목록을 두 번 이어 붙여 절반만큼 흘린다 */}
        <div className="mx-auto w-full max-w-[1200px] px-5 desktop:px-0">
          <div className="flex h-[49px] w-full items-center overflow-hidden desktop:h-[153px]">
            {/* gap은 마지막 로고 뒤에 붙지 않아 -50%가 한 벌 길이보다 짧아지고 이음매에서 튄다. 로고마다 오른쪽 여백을 줘서 정확히 한 벌만큼 흐르게 한다 */}
            <div className="flex w-max shrink-0 items-center motion-safe:animate-logo-marquee">
              {[...PARTNERS, ...PARTNERS].map((src, index) => (
                <Image
                  key={`${src}-${index}`}
                  src={src}
                  alt={
                    index < PARTNERS.length
                      ? (src
                          .split("/")
                          .pop()
                          ?.replace(/(2026)?\.\w+$/, "") ?? "")
                      : ""
                  }
                  aria-hidden={index >= PARTNERS.length}
                  width={193}
                  height={52}
                  loading="eager"
                  className={cn(
                    "mr-4 w-auto shrink-0 object-contain desktop:mr-12",
                    LOGO_SIZE[src] ?? "h-[17px] desktop:h-[52px]",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
