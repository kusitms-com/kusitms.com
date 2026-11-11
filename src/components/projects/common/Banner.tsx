import Image from "next/image";

interface BannerProps {
  title?: string;
  description?: string | React.ReactNode;
  imageSrc?: string;
}

const DEFAULT_BANNER_SRC = "/projects/ProjectBanner34th.png";

export default function Banner({ title, description, imageSrc = DEFAULT_BANNER_SRC }: BannerProps) {
  const textDescription = typeof description === "string" ? description : "";
  const alt = [title, textDescription].filter(Boolean).join(" - ") || "KUSITMS banner";

  return (
    <section className="relative w-full overflow-hidden bg-[#e8efff]">
      <div className="relative h-[180px] w-full overflow-hidden tablet:aspect-[4096/400] tablet:h-auto">
        <Image
          src={imageSrc}
          alt={alt}
          priority
          fill
          sizes="100vw"
          className="object-cover object-[60%_50%] tablet:object-center"
        />
        {/* 배너 이미지 속 글자는 폭의 18~45% 구간에 있어 모바일(180px 높이, 폭의 약 20%만 보임)에서는 잘린다.
            모바일은 글자가 없는 60% 지점을 기준으로 배경만 보여주고, 제목·설명을 코드 텍스트로 올린다 */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-1 px-8 tablet:hidden">
          {title && <p className="text-body-1 font-bold text-brand-primary">{title}</p>}
          {description && <p className="text-body-6 text-brand-primary">{description}</p>}
        </div>
      </div>
    </section>
  );
}
