import { HeaderDesktopLogo } from "@kusitms.com/icons";
import FadeIn from "@/components/shared/FadeIn";

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
      className="relative z-10 bg-linear-to-b from-[rgba(247,247,248,0)] via-[rgba(247,247,248,0.45)] via-[17.2521%] to-fill-netural to-[56.765%] pt-[200px] pb-[150px]"
    >
      <FadeIn className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 desktop:gap-[35px]">
        <HeaderDesktopLogo
          role="img"
          aria-label="KUSITMS"
          className="h-8 w-[174px] desktop:h-11 desktop:w-[242px]"
        />
        <p className="text-center text-[20px] leading-[44px] font-semibold tracking-[-0.008em] text-black desktop:text-[40px] desktop:leading-[2.2] desktop:tracking-[-0.018em]">
          <span className="sr-only">{DESKTOP_LINES.join(" ")}</span>
          <span aria-hidden="true" className="block desktop:hidden">
            <Lines lines={MOBILE_LINES} />
          </span>
          <span aria-hidden="true" className="hidden desktop:block">
            <Lines lines={DESKTOP_LINES} />
          </span>
        </p>
      </FadeIn>
    </section>
  );
}
