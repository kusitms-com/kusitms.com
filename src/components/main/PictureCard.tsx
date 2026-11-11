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
      <div className="flex flex-col gap-3 px-6 pt-5 pb-6 desktop:px-5 desktop:pt-4 desktop:pb-5">
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
