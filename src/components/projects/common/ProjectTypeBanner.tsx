import Image from "next/image";

interface Props {
  title: string;
  detail: string;
}

export default function ProjectTypeBanner({ title, detail }: Props) {
  return (
    <section className="w-full relative h-[420px] pb-25 px-10 rounded-[12px] ">
      <div className="w-full h-full overflow-hidden relative">
        <Image
          src={"/projects/img/Project.png"}
          alt={"Projects type banner"}
          className="object-cover rounded-[12px] max-h-[320px]"
          fill
        />
        <div className="rounded-[12px] max-h-[320px] absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-center pointer-events-none">
          <p className="text-sky-blue-500 text-title-5 ">{title}</p>
          <p className="text-body-4 text-gray-0 whitespace-pre-line">
            {detail}
          </p>
        </div>
      </div>
    </section>
  );
}
