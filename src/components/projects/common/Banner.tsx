"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerProps {
  title?: string;
  description?: string | React.ReactNode;
}

export default function Banner({ title, description }: BannerProps) {
  const [isTablet, setIsTablet] = useState<boolean | null>(null);

  useEffect(() => {
    const checkTablet = () => {
      setIsTablet(window.innerWidth >= 768);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  if (isTablet === null) return <div className="w-full h-[180px] bg-sky-100" />;

  return (
    <>
      {/* 데스크톱 */}
      {isTablet && (
        <section className="w-full relative bg-[linear-gradient(120deg,_#EAF9FF_0%,_#99DEFF_90%,_#4688FE_120%)]">
          <div className="max-w-[2000px] mx-auto relative">
            <div className="max-w-[1024px] mx-auto relative h-[180px] overflow-hidden">
              <div className="max-w-[727px] h-[464px] relative ml-auto -top-[205px]">
                <Image
                  src={"/projects/ProjectBanner.svg"}
                  alt={"Projects banner"}
                  priority
                  fill
                  sizes="(max-width: 1024px) 100vw, 727px"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-start pl-[44px] pointer-events-none">
                <div className="w-full">
                  <p className="text-[25px] font-extrabold text-dark-blue-600">{title}</p>
                  <p className="text-[18px] font-semibold text-dark-blue-600">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* 모바일 */}
      {!isTablet && (
        <section className="w-full relative bg-[linear-gradient(120deg,_#EAF9FF_0%,_#99DEFF_90%,_#4688FE_120%)]">
          <div className="mx-auto relative">
            <div className="w-full mx-auto relative h-[180px] overflow-hidden">
              <div className="h-[250px] w-full absolute bottom-[-70px] ">
                <Image
                  src={"/projects/ProjectBanner.svg"}
                  alt={"Projects banner"}
                  priority
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "none",
                    objectPosition: "left bottom",
                    left: 0,
                    right: "auto",
                    top: "auto",
                    bottom: 0,
                  }}
                />
              </div>
              <div className="absolute inset-0 flex pt-[32px] gap-[3.6px] pl-[32px] pointer-events-none z-10">
                <div className="w-full">
                  <p className="text-body-1 text-dark-blue-600 font-bold">{title}</p>
                  <p className="text-body-6 text-dark-blue-600 whitespace-pre-line">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
