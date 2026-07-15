import { ChevronRight, User } from "lucide-react";

export function ProfileSummary() {
  return (
    <section className="flex min-h-[132px] items-center justify-between rounded-[14px] bg-[#f7f7f9] px-6 shadow-[0_0_0_1px_#f0f1f5]">
      <div className="flex items-center gap-4">
        <div className="grid h-[56px] w-[56px] place-items-center rounded-full bg-[#d8dbe2] text-white">
          <User size={32} fill="currentColor" />
        </div>
        <div>
          <p className="text-xs font-semibold text-[#8d92a3]">나의 프로필</p>
          <h1 className="mt-4 text-xl font-bold text-[#151519]">이민웅</h1>
          <p className="mt-1 text-base text-[#737889]">24기 · 기획 파트</p>
        </div>
      </div>
      <button
        type="button"
        className="hidden h-10 cursor-pointer items-center gap-1 rounded-md border border-[#d8dce6] bg-white px-4 text-sm font-semibold text-[#343946] desktop:flex"
      >
        프로필 수정
        <ChevronRight size={16} />
      </button>
    </section>
  );
}
