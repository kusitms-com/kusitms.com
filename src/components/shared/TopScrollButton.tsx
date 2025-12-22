"use client";

function TopScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex cursor-pointer justify-center items-center desktop:w-[56px] desktop:h-[56px] w-[36px] h-[36px] rounded-full bg-[#ffffff] mx-auto shadow-[0px_1px_20px_rgba(179,179,188,0.4)]"
    >
      <span className="desktop:text-body-5 text-body-9 font-semibold text-black">TOP</span>
    </button>
  );
}

export default TopScrollButton;
