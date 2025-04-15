import Image from "next/image";
import Link from "next/link";

interface ProjectNavigationProps {
  prevId?: string;
  nextId?: string;
}

export const ProjectNavigation = ({
  prevId,
  nextId,
}: ProjectNavigationProps) => {
  return (
    <div className="w-full">
      {/* 이전 게시물 */}
      {prevId && (
        <Link
          href={`/projects/meetup/${prevId}`}
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
          href={`/projects/meetup/${nextId}`}
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
  );
};
