"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface CloseButtonProps {
  className?: string;
  width?: number;
  height?: number;
}

export const BackButton = ({
  className = "",
  width = 14,
  height = 14,
}: CloseButtonProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/projects/meetup");
  };

  return (
    <Image
      src="/projects/icons/CloseIcon.svg"
      alt="닫기"
      width={width}
      height={height}
      className={`cursor-pointer ${className}`}
      onClick={handleGoBack}
    />
  );
};
