"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "학회소개", matchPath: "/" },
  { href: "/projects/meetup", label: "프로젝트", matchPath: "/projects" },
  { href: "/archive", label: "32기 아카이브", matchPath: "/archive" },
  { href: "/reviews", label: "후기", matchPath: "/reviews" },
  { href: "/recruit", label: "리크루팅", matchPath: "/recruit" },
];

function MobilePageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 메뉴가 열릴 때 스크롤 막기
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* 햄버거 메뉴 버튼 */}
      <div className="desktop:hidden">
        <button onClick={toggleMenu}>
          {!isMenuOpen ? (
            <Image
              src="/projects/icons/menu.svg"
              alt="메뉴"
              width={32}
              height={32}
              className="w-[32px] h-[32px]"
            />
          ) : (
            <Image
              src="/projects/icons/CloseIcon.svg"
              alt="닫기"
              width={26}
              height={26}
              className="w-[26px] h-[26px]"
            />
          )}
        </button>
      </div>

      {/* 헤더 아래 메뉴 오버레이 */}
      {isMenuOpen && (
        <div className="fixed top-[74px] left-0 right-0 bottom-0 bg-[#151519] z-40 flex flex-col justify-center">
          {/* 메뉴 항목들 */}
          <div className="flex flex-col justify-center items-center space-y-8 px-8">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="text-white text-2xl font-medium text-center"
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="w-full max-w-md h-px bg-[#4A4B52]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MobilePageNav;
