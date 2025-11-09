import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full relative bg-[linear-gradient(120deg,_#EAF9FF_0%,_#99DEFF_90%,_#4688FE_120%)] overflow-hidden">
      <div className="max-w-[2000px] mx-auto relative">
        <div className="max-w-[1024px] mx-auto relative h-[320px] overflow-hidden">
          <div className="max-w-[727px] h-[464px] relative ml-auto -top-[144px]">
            <Image
              src={"/projects/Banner.svg"}
              alt={"Projects banner"}
              priority
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex mt-[51px] justify-start pl-[44px] pointer-events-none">
            <div className="w-full">
              <p className="text-[25px] font-extrabold text-dark-blue-600">More it, MORE IT</p>
              <p className="text-[clamp(10px,1.6vw,18px)] font-semibold text-dark-blue-600">
                KUSITMS 32기 학회원을 위한 페이지입니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
