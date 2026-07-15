import { HeaderDesktopLogo } from "@kusitms.com/icons";

export function MyPageHeader() {
  return (
    <header className="h-[72px] border-b border-[#eef0f6] bg-white">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5 desktop:px-0">
        <HeaderDesktopLogo className="h-6 w-[132px]" aria-label="KUSITMS" />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#737889] desktop:flex">
          <span>학회소개</span>
          <span>프로젝트</span>
          <span>32기 아카이브</span>
          <span>후기</span>
          <span>리크루팅</span>
          <div className="h-8 w-8 rounded-full bg-[#e9ebf2]" />
        </nav>
      </div>
    </header>
  );
}
