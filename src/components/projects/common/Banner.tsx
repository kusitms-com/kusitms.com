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
          className="object-cover object-[80%_50%] tablet:object-center"
        />
        {/* 이미지 왼쪽에 글자가 있어 768px 미만에서는 글자 없는 오른쪽을 보여주고, 제목·설명을 코드 텍스트로 올린다 */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-1 px-8 tablet:hidden">
          {title && <p className="text-body-1 font-bold text-brand-primary">{title}</p>}
          {description && <p className="text-body-6 text-brand-primary">{description}</p>}
        </div>
      </div>
    </section>
  );
}
