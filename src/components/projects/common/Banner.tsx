import Image from "next/image";

interface BannerProps {
  title?: string;
  description?: string;
}

export default function Banner({
  title = "프로젝트",
  description = "KUSITMS의 기업, 밋업(Meet-up) 프로젝트를 만나보세요",
}: BannerProps) {
  return (
    <section className="w-full relative bg-[linear-gradient(120deg,_#EAF9FF_0%,_#99DEFF_90%,_#4688FE_120%)]">
      <div className="max-w-[2000px] mx-auto relative">
        <div className="max-w-[1024px] mx-auto relative h-[180px] overflow-hidden">
          <div className="max-w-[727px] h-[464px] relative ml-auto -top-[205px]">
            <Image
              src={"/projects/ProjectBanner.svg"}
              alt={"Projects banner"}
              priority
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-start pl-[44px] pointer-events-none">
            <div className="w-full">
              <p className="text-[25px] font-extrabold text-dark-blue-600">{title}</p>
              <p className="text-[clamp(10px,1.6vw,18px)] font-semibold text-dark-blue-600">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
