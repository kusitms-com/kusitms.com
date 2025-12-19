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
    <div className="w-full tablet:block hidden">
      {/* 이전 게시물 */}
      {prevId && (
        <Link
          href={`${domain}/${prevId}`}
          replace
          className="fixed left-[calc(50%_-_312px_-_44px)] left-[calc(50%_-_312px_-_88px)] top-1/2 -translate-y-1/2 flex justify-center items-center bg-white/30 rounded-full w-[52px] h-[52px] hover:scale-105 transition-transform z-[9999]"
        >
          <Image
            src="/projects/icons/ArrowLeftWhite.svg"
            alt="ArrowLeft"
            width={13}
            height={23}
            style={{ width: "13px", height: "23px" }}
          />
        </Link>
      )}

      {/* 다음 게시물 */}
      {nextId && (
        <Link
          href={`${domain}/${nextId}`}
          replace
          className="fixed right-[calc(50%_-_312px_-_82px)]  top-1/2 -translate-y-1/2 flex justify-center items-center bg-white/30 rounded-full  w-[52px] h-[52px] hover:scale-105 transition-transform z-[9999]"
        >
          <Image
            src="/projects/icons/ArrowRightWhite.svg"
            alt="ArrowRight"
            width={13}
            height={23}
            style={{ width: "13px", height: "23px" }}
          />
        </Link>
      )}
    </div>
  );
}
