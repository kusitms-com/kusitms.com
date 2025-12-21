import Image from "next/image";
import type React from "react";

interface Props {
  title: string;
  detail: React.ReactNode;
}

export default function ProjectTypeBanner({ title, detail }: Props) {
  return (
    <section className="w-full relative tablet:h-[420px] h-[149px] tablet:pb-25 mb-15 tablet:px-10 px-4 rounded-[12px] ">
      <div className="w-full h-full overflow-hidden relative">
        <Image
          src={"/projects/img/Project.png"}
          alt={"Projects type banner"}
          priority
          className="object-cover rounded-[12px] max-h-[320px]"
          fill
        />
        <div className="rounded-[12px] max-h-[320px] absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex flex-col tablet:gap-4 gap-3 items-center justify-center text-center pointer-events-none">
          <p className="text-sky-blue-500 tablet:text-title-5 text-body-3">{title}</p>
          <p className="tablet:text-body-4 text-body-9 text-gray-0 whitespace-pre-line">{detail}</p>
        </div>
      </div>
    </section>
  );
}
