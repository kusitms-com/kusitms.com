import Image from "next/image";
import Link from "next/link";

interface ProjectNavigationProps {
  prevId?: string;
  nextId?: string;
  domain?: string;
}

export default function ProjectNavigation({
  prevId,
  nextId,
  domain = "/projects/meetup",
}: ProjectNavigationProps) {
  return (
    <>
      <div className="w-full desktop:block hidden">
        {/* 이전 게시물 */}
        {prevId && (
          <Link
            href={`${domain}/${prevId}`}
            className="absolute left-[3.5%] top-[70%]
                     flex justify-center items-center bg-[#E2E2EB] rounded-full 
                     w-[70px] h-[70px] hover:scale-105 transition-transform"
          >
            <Image
              src="/projects/icons/ArrowLeft.svg"
              alt="이전 페이지"
              width={38}
              height={38}
              style={{ width: "38px", height: "38px" }}
            />
          </Link>
        )}

        {/* 다음 게시물 */}
        {nextId && (
          <Link
            href={`${domain}/${nextId}`}
            className="absolute right-[3.5%] top-[70%]
                     flex justify-center items-center bg-[#E2E2EB] rounded-full 
                     w-[70px] h-[70px] hover:scale-105 transition-transform"
          >
            <Image
              src="/projects/icons/ArrowRight.svg"
              alt="다음 페이지"
              width={38}
              height={38}
              style={{ width: "38px", height: "38px" }}
            />
          </Link>
        )}
      </div>
      {/* 모바일 */}
      <div className="w-full desktop:hidden block">
        {/* 이전 게시물 */}
        {prevId && (
          <Link
            href={`${domain}/${prevId}`}
            className="absolute left-[-10px] top-[180px]
                     flex justify-center items-center rounded-full 
                     w-[70px] h-[70px] hover:scale-105 transition-transform"
          >
            <Image
              src="/projects/icons/arrow_back_ios_left.svg"
              alt="이전 페이지"
              width={20}
              height={20}
              style={{ width: "20px", height: "20px" }}
            />
          </Link>
        )}

        {/* 다음 게시물 */}
        {nextId && (
          <Link
            href={`${domain}/${nextId}`}
            className="absolute right-[-10px] top-[180px]
                     flex justify-center items-center rounded-full 
                     w-[70px] h-[70px] hover:scale-105 transition-transform"
          >
            <Image
              src="/projects/icons/arrow_back_ios.svg"
              alt="다음 페이지"
              width={20}
              height={20}
              style={{ width: "20px", height: "20px" }}
            />
          </Link>
        )}
      </div>
    </>
  );
}
