import Image from "next/image";

async function DisplayPage() {
  return (
    <div className="w-full flex flex-col items-center gap-y-12 py-80 relative h-[5921px]">
      <Image
        src="/display/pageBackgrond.png"
        alt="background"
        width={1920}
        height={1080}
        className="absolute right-0 top-0 w-full h-full object-cover z-0"
      />
    </div>
  );
}

export default DisplayPage;
