import { HeaderDesktopLogo } from "@kusitms.com/icons";

const DESKTOP_LINES = [
  "큐시즘은 2009년 설립된 한국대학생 IT경영학회입니다.",
  "기획자·디자이너·개발자가 한 팀이 되어 실제 서비스를 만들고,",
  "전시회에서 선보이며 함께 성장합니다.",
];
const MOBILE_LINES = [
  "큐시즘은 2009년 설립된",
  "한국대학생 IT경영학회입니다.",
  "기획자·디자이너·개발자가",
  "한 팀이 되어 실제 서비스를 만들고,",
  "전시회에서 선보이며",
  "함께 성장합니다.",
];

function Lines({ lines }: { readonly lines: readonly string[] }) {
  return lines.map((line) => (
    <span key={line} className="block whitespace-nowrap">
      {line}
    </span>
  ));
}

export default function AboutSection() {
  return (
    <section
      aria-label="큐시즘 소개"
      className="relative z-10 bg-linear-to-b from-[rgba(247,247,248,0)] to-fill-netural to-[67.693%] px-4 pt-[300px] pb-[150px] desktop:px-0 desktop:pt-[100px] desktop:pb-[187px]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[35px]">
        <HeaderDesktopLogo
          role="img"
          aria-label="KUSITMS"
          className="h-10 w-[220px] desktop:h-11 desktop:w-[242px]"
        />
        <p className="text-center text-[24px] leading-[44px] font-bold tracking-[-0.008em] text-black desktop:text-[min(48px,3.334vw)] desktop:leading-[1.8] desktop:font-semibold desktop:tracking-[-0.018em]">
          <span className="sr-only">{DESKTOP_LINES.join(" ")}</span>
          <span aria-hidden="true" className="block desktop:hidden">
            <Lines lines={MOBILE_LINES} />
          </span>
          <span aria-hidden="true" className="hidden desktop:block">
            <Lines lines={DESKTOP_LINES} />
          </span>
        </p>
      </div>
    </section>
  );
}
