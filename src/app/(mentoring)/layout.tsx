import type { ReactNode } from "react";

export default function MentoringLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <div className="hidden desktop:block desktop:h-[72px]" />
      <main className="flex flex-col items-center pt-10 pb-20 min-[375px]:pt-5 min-[375px]:px-4">
        <div className="flex w-[343px] flex-col items-center min-[375px]:w-[380px]">{children}</div>
      </main>
    </>
  );
}
