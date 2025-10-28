export default function Banner() {
  return (
    <section className="w-full relative ">
      <img
        src={"/projects/Banner.svg"}
        alt={"Projects banner"}
        className="block w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-start pl-[44px] pointer-events-none">
        <div className="max-w-[1180px]">
          <p className="text-[25px] font-extrabold text-dark-blue-600">
            프로젝트
          </p>
          <p className="text-[18px]  font-semibold text-dark-blue-600 ">
            KUSITMS의 기업, 밋업(Meet-up) 프로젝트를 만나보세요
          </p>
        </div>
      </div>
    </section>
  );
}
