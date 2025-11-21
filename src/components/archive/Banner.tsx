import Image from "next/image";

export default function Banner() {
  return (
    <>
      {/* 데스크톱 배너 */}
      <section className="w-full hidden desktop:block relative overflow-hidden">
        <div className="w-full mx-auto relative h-[400px] overflow-hidden">
          <div className="h-[400px] relative ml-auto">
            <Image
              src={"/projects/Banner.svg"}
              alt={"Projects banner"}
              priority
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 left-1/2 -translate-x-1/2 flex-col min-w-[1024px] flex p-[48px] justify-between pointer-events-none">
            <Image src={"/projects/BannerDate.svg"} alt={"Banner date"} width={425} height={61} />
            <Image src={"/projects/BannerText.svg"} alt={"Banner text"} width={582} height={154} />
          </div>
        </div>
      </section>
      {/* 모바일 배너 */}
      <section className="w-full block desktop:hidden relative overflow-hidden">
        <div className="w-full mx-auto relative h-[297px] overflow-hidden">
          <div className="h-[297px] relative ml-auto">
            <Image
              src={"/projects/Banner.svg"}
              alt={"Projects banner"}
              priority
              fill
              className="object-cover"
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
    </>
  );
}
