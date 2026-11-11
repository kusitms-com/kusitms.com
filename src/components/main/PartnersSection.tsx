import Image from "next/image";
import { useId } from "react";
import FadeIn from "@/components/shared/FadeIn";
import IntroductionMessage from "./IntroductionMessage";

/** 피그마 KUSITMS 파트너사(데스크톱 614:18290, 모바일 614:18138). */
export default function PartnersSection({ sponsors }: { sponsors: readonly string[] }) {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="py-[100px] desktop:pt-[400px] desktop:pb-0">
      <div className="flex flex-col gap-9 desktop:gap-12">
        <FadeIn className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-5 text-center desktop:items-start desktop:px-0 desktop:gap-12 desktop:text-left">
          <p className="text-body-16b text-brand-primary desktop:text-[20px] desktop:leading-8 desktop:tracking-[-0.008em]">
            PARTNERS
          </p>
          <div className="flex flex-col gap-1 desktop:gap-3">
            <h2
              id={headingId}
              className="text-headline-24b text-label-normal desktop:text-[48px] desktop:leading-[62px] desktop:tracking-[-0.018em]"
            >
              KUSITMS 파트너사
            </h2>
            <p className="text-label-14r text-label-netural desktop:text-body-18m desktop:text-label-alternative">
              큐시즘과 함께 청년 IT경영의 내일을 만들어갈 다양한 후원사를 기다립니다. 여러분의
              후원이 IT경영의 미래를 만듭니다
            </p>
          </div>
        </FadeIn>
        {/* 로고 띠는 제목과 같은 콘텐츠 폭(1200px, 모바일 좌우 20px)에 맞춘다(시안 944px 창에서 변경). 목록을 두 번 이어 붙여 절반만큼 흘린다 */}
        <FadeIn className="mx-auto w-full max-w-[1200px] px-5 desktop:px-0">
          <div className="flex h-[49px] w-full items-center overflow-hidden desktop:h-[153px]">
            {/* gap은 마지막 로고 뒤에 붙지 않아 -50%가 한 벌 길이보다 짧아지고 이음매에서 튄다. 로고마다 오른쪽 여백을 줘서 정확히 한 벌만큼 흐르게 한다 */}
            <div className="flex w-max shrink-0 items-center motion-safe:animate-logo-marquee">
              {sponsors.length === 0 && <IntroductionMessage message="소개 정보를 준비 중이에요" />}
              {[...sponsors, ...sponsors].map((src, index) => (
                <Image
                  key={`${src}-${index}`}
                  src={src}
                  alt={index < sponsors.length ? `후원사 ${index + 1}` : ""}
                  aria-hidden={index >= sponsors.length}
                  width={193}
                  height={52}
                  loading="eager"
                  className="mr-4 h-[17px] w-auto shrink-0 object-contain desktop:mr-12 desktop:h-[52px]"
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
