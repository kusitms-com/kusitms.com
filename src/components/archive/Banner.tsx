"use client";
import Image from "next/image";
import { useBreakpoint } from "@/hooks";

export default function Banner() {
  const { isDesktop } = useBreakpoint();

  if (isDesktop === null) return <div className="w-full h-[297px] desktop:h-[400px] bg-gray-100" />;

  return (
    <>
      {/* 데스크톱 배너 */}
      {isDesktop && (
        <section className="w-full relative overflow-hidden">
          <div className="w-full mx-auto relative h-[400px]">
            <div className="relative h-[400px] w-full">
              <Image
                src={"/projects/Banner.svg"}
                alt={"Projects banner"}
                priority
                fill
                sizes="(max-width: 1200px) 1200px, 3840px"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="flex flex-col w-full max-w-[1024px] px-[48px] h-full justify-between py-[48px]">
                <Image
                  src={"/projects/BannerDate.svg"}
                  alt={"Banner date"}
                  width={425}
                  height={61}
                />
                <Image
                  src={"/projects/BannerText.svg"}
                  alt={"Banner text"}
                  width={582}
                  height={154}
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {/* 모바일 배너 */}
      {!isDesktop && (
        <section className="w-full relative overflow-hidden">
          <div className="w-full mx-auto relative h-[297px]">
            <div className="h-[297px] w-full relative">
              <Image
                src={"/projects/Banner.svg"}
                alt={"Projects banner"}
                priority
                fill
                sizes="100vw"
                style={{ objectFit: "none", objectPosition: "center top" }}
              />
            </div>
            <div className="absolute inset-0 flex-col flex py-[36px] justify-between pointer-events-none">
              <Image
                src={"/projects/BannerDate.svg"}
                alt={"Banner date"}
                width={268}
                height={42}
                className="ml-[27px]"
              />
              <Image
                src={"/projects/BannerText.svg"}
                alt={"Banner text"}
                width={281}
                height={76}
                className="ml-[20px]"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
