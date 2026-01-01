"use client";

import Image from "next/image";

function TopScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="cursor-pointer">
      <Image
        src="/topScroll.svg"
        alt="Top Scroll"
        width={48}
        height={48}
        className="desktop:w-12 desktop:h-12 w-10 h-10"
      />
    </button>
  );
}

export default TopScrollButton;
