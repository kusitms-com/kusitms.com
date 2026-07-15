import type { SectionProps } from "@/components/mypage/ob/types";

export function Section({ title, icon: Icon, children }: SectionProps) {
  return (
    <section className="rounded-[14px] bg-white p-6 shadow-[0_0_0_1px_#dfe2ea]">
      <div className="mb-7 flex items-center gap-2">
        <Icon size={20} className="text-[#3157ff]" />
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 desktop:grid-cols-2">{children}</div>
    </section>
  );
}
