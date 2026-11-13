import Image from "next/image";
import { cn } from "@/lib/utils";

interface PictureCardProps {
  image: string;
  number: string;
  /** 두 줄 제목. 줄바꿈은 \n */
  title: string;
  description: string;
  className?: string;
}

/** 피그마 Card/Picture. 모바일 → 데스크톱 반응형 (데스크톱 폭 282px은 부모가 지정) */
export default function PictureCard({
  image,
  number,
  title,
  description,
  className,
}: PictureCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-m bg-fill-normal shadow-spread-s", className)}>
      <div className="relative aspect-[282/120] desktop:aspect-[1284/447]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 340px, 100vw"
          className="object-cover"
        />
      </div>
      {/* 1024~1279px에서는 카드가 화면 폭에 맞춰 218px까지 줄어, 좌우 여백 20px이면 긴 제목(약 183px)이 세 줄이 된다.
          이 구간만 여백을 16px로 줄여 시안의 두 줄을 유지한다 */}
      <div className="flex flex-col gap-3 px-6 pt-5 pb-6 desktop:px-4 desktop:pt-4 desktop:pb-5 min-[1280px]:px-5">
        <p className="text-body-16sb desktop:text-label-14sb text-brand-primary">{number}</p>
        <div className="flex flex-col gap-2">
          <h3 className="whitespace-pre-line text-headline-20sb desktop:text-body-18sb text-label-normal">
            {title}
          </h3>
          <p className="whitespace-pre-line text-label-14r desktop:text-caption-12r text-label-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
