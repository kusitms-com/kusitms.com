import Image from "next/image";
import { cn } from "@/lib/utils";

interface PictureCardProps {
  image: string;
  number: string;
  /** 두 줄 제목. 줄바꿈은 \n */
  title: string;
  description: string;
  /** 사진 위 검정 막 불투명도(시안 기본 35%, 사진이 밝은 02번은 45%). 데스크톱 호버 시 걷힌다 */
  dimOpacity?: number;
  className?: string;
}

/** 피그마 Card/Picture. 모바일 → 데스크톱 반응형 (데스크톱 폭 282px은 부모가 지정) */
export default function PictureCard({
  image,
  number,
  title,
  description,
  dimOpacity = 0.35,
  className,
}: PictureCardProps) {
  return (
    <div
      className={cn("group overflow-hidden rounded-m bg-fill-normal shadow-spread-s", className)}
    >
      <div className="relative aspect-[282/120]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 340px, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-black transition-opacity duration-500 ease-out motion-reduce:transition-none desktop:group-hover:opacity-0!"
          style={{ opacity: dimOpacity }}
        />
      </div>
      {/* 시안(기본 상태)은 모바일·데스크톱 모두 같은 카드(여백 24/20/24, 16sb·20sb·14r)다.
          1024~1279px에서는 카드가 218px까지 줄어 제목이 세 줄이 되므로 이 구간만 여백·글자를 한 단계 줄인다 */}
      <div className="flex flex-col gap-3 px-6 pt-5 pb-6 desktop:max-[1279px]:px-4">
        <p className="text-body-16sb text-brand-primary">{number}</p>
        <div className="flex flex-col gap-2">
          <h3 className="whitespace-pre-line text-headline-20sb desktop:max-[1279px]:text-body-18sb text-label-normal">
            {title}
          </h3>
          <p className="whitespace-pre-line text-label-14r desktop:max-[1279px]:text-caption-12r text-label-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
