import Image from "next/image";

interface BannerProps {
  title?: string;
  description?: string | React.ReactNode;
  imageSrc?: string;
}

const DEFAULT_BANNER_SRC = "/projects/ProjectBanner2026.png";

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
          className="object-cover object-left tablet:object-center"
        />
      </div>
    </section>
  );
}
