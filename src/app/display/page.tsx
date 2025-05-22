import Image from "next/image";
import { DisplayListContainer, OptionBar } from "@/components/display";

async function DisplayPage() {
  return (
    <div className="w-full flex flex-col items-center gap-y-12 py-80 relative">
      <Image
        src="/display/pageBackgrond.png"
        alt="background"
        width={1920}
        height={1080}
        className="absolute right-0 top-0 w-full h-full object-cover z-0"
      />
      <section className="mx-auto w-full max-w-[1180px] flex flex-col">
        <OptionBar />
        <DisplayListContainer />
        <h2 className="text-5xl font-bold text-white text-center">
          큐밀리들의 31번째 여정
        </h2>
      </section>
    </div>
  );
}

export default DisplayPage;
