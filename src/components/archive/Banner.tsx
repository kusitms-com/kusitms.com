import Image from "next/image";

export default function Banner() {
  return (
    <>
      {/* 데스크톱 배너 */}
      <section className="w-full hidden desktop:block relative overflow-hidden">
        <div className="w-full mx-auto relative h-[400px]">
          <div className="relative h-[400px] w-full">
            <Image
              src={"/projects/Banner.svg"}
              alt={"Projects banner"}
              priority
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col w-full max-w-[1024px] px-[48px] h-full justify-between py-[48px]">
              <Image src={"/projects/BannerDate.svg"} alt={"Banner date"} width={425} height={61} />
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
      {/* 모바일 배너 */}
      <section className="w-full block desktop:hidden relative overflow-hidden">
        <div className="w-full mx-auto relative h-[297px]">
          <div className="h-[297px] w-full relative">
            <Image
              src={"/projects/Banner.svg"}
              alt={"Projects banner"}
              priority
              fill
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
    </>
  );
}
