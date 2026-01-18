import Image from "next/image";
import Link from "next/link";

interface ProjectNavigationProps {
  prevId?: string;
  nextId?: string;
  domain?: string;
}

interface NavButtonProps {
  href: string;
  positionClass: string;
  icon: "left" | "right";
  size: "large" | "small";
  className?: string;
}

function NavButton({ href, positionClass, icon, size }: NavButtonProps) {
  const iconSize = size === "large" ? { width: 16, height: 25 } : { width: 10, height: 18 };
  const paddingClass = size === "small" ? (icon === "left" ? "pr-[1.2px]" : "pl-[1px]") : (icon === "left" ? "pr-[2px]" : "pl-[4px]");

  return (
    <Link
      href={href}
      replace
      className={`fixed z-[9999] flex justify-center items-center 
        bg-white/30 rounded-full 
        ${positionClass} 
        ${size === "large" ? "w-[52px] h-[52px]" : "w-[40px] h-[40px]"}
        ${paddingClass}
      `}
    >
      <Image
        src={`/projects/icons/${icon === "left" ? "ArrowLeftWhite" : "ArrowRightWhite"}.svg`}
        alt={icon === "left" ? "ArrowLeft" : "ArrowRight"}
        width={iconSize.width}
        height={iconSize.height}
        style={{ width: `${iconSize.width}px`, height: `${iconSize.height}px` }}
      />
    </Link>
  );
}

export default function ProjectNavigation({
  prevId,
  nextId,
  domain = "/projects/meetup",
}: ProjectNavigationProps) {
  return (
    <>
      <div className="hidden tablet:flex">
        {prevId && (
          <NavButton
            href={`${domain}/${prevId}`}
            icon="left"
            size="large"
            positionClass="left-[calc(50%_-_312px_-_82px)] top-1/2 -translate-y-1/2"
          />
        )}
        {nextId && (
          <NavButton
            href={`${domain}/${nextId}`}
            icon="right"
            size="large"
            positionClass="right-[calc(50%_-_312px_-_82px)] top-1/2 -translate-y-1/2"
          />
        )}
      </div>
      {prevId && (
        <NavButton
          href={`${domain}/${prevId}`}
          icon="left"
          size="small"
          positionClass="tablet:hidden top-[580px] left-4"
        />
      )}
      {nextId && (
        <NavButton
          href={`${domain}/${nextId}`}
          icon="right"
          size="small"
          positionClass="tablet:hidden top-[580px] right-4"
        />
      )}
    </>
  );
}
