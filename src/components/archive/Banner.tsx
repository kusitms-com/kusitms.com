"use client";
import Image from "next/image";
import { useBreakpoint } from "@/hooks";

const ARCHIVE_BANNER_SRC = "/projects/archive/KusitmsExhibitionBanner.webp";

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
                src={ARCHIVE_BANNER_SRC}
                alt={"KUSITMS exhibition banner"}
                priority
                fill
                sizes="(max-width: 1200px) 1200px, 3840px"
                className="object-cover object-center"
              />
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
                src={ARCHIVE_BANNER_SRC}
                alt={"KUSITMS exhibition banner"}
                priority
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
