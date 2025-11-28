"use client";
import Image from "next/image";

const BACKGROUND_GRADIENT =
  "radial-gradient(118.65% 100.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(129deg, rgba(70, 136, 254, 0.00) 44.57%, rgba(70, 136, 254, 0.20) 100%), linear-gradient(104deg, #EAF9FF 23.85%, #99DEFF 100%), #FFF";
const OUTFIT_FONT = "font-[family-name:var(--font-outfit)]";
const OUTLINE_TEXT_BASE = `${OUTFIT_FONT} text-[#0077FF] leading-[100%] -tracking-[1.36px] font-medium`;

export default function IntroSection() {
  return (
    <div
      className="relative w-full h-[808px] desktop:mt-[74px]"
      style={{ background: BACKGROUND_GRADIENT }}
    >
      <p className="absolute z-10 top-[72px] right-[75px] text-body-6 text-[#0077FF] text-right">
        Korean University Students
        <br />
        It, Management Society
      </p>
      <div className="absolute z-10 top-[72px] left-[84px] space-y-4">
        <p className={`${OUTLINE_TEXT_BASE} text-[42px]`}>KUSITMS 32nd</p>
        <div className="flex items-center gap-x-9">
          <p className={`${OUTLINE_TEXT_BASE} text-[68px]`}>More it, MORE IT</p>
          <Image src="/main/Snow.svg" alt="Snow" width={54} height={59} />
        </div>
      </div>
      <Image
        src="/main/img/Main_Graphic.png"
        alt="Main Graphic"
        fill
        className="z-0 object-cover object-center"
      />
    </div>
  );
}
