import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { sideNavItems } from "@/components/mypage/ob/constants";

type SideNavProps = {
  activeItem?: string;
};

export function SideNav({ activeItem = "멘토링 관리" }: SideNavProps) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col self-stretch border-r border-[#e5e7ef] bg-white py-10 text-sm desktop:flex">
      <div className="mb-7 flex items-center gap-3 px-5">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-[#d8dbe2] text-white">
          <User size={22} fill="currentColor" />
        </div>
        <div>
          <p className="font-bold text-[#343946]">정하늘</p>
          <p className="text-sm text-[#737889]">33기 · 기획</p>
        </div>
      </div>
      <nav className="space-y-1 px-3">
        {sideNavItems.map(({ label, icon: Icon, href }) => {
          const active = label === activeItem;
          const className = `flex h-12 w-full cursor-pointer items-center gap-3 rounded-md px-4 text-left font-semibold ${
            active ? "bg-[#eef3ff] text-[#3157ff]" : "text-[#626879] hover:bg-[#f7f8fb]"
          }`;

          return href ? (
            <Link key={label} href={href} className={className}>
              <Icon size={16} />
              {label}
            </Link>
          ) : (
            <button key={label} type="button" className={className}>
              <Icon size={16} />
              {label}
            </button>
          );
        })}
      </nav>
      <button
        type="button"
        className="mt-auto flex h-10 w-full cursor-pointer items-center gap-3 px-5 text-sm font-semibold text-[#626879]"
      >
        <LogOut size={16} />
        로그아웃
      </button>
    </aside>
  );
}
