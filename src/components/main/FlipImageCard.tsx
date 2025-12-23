"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

type FlipImageCardProps = {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
};

export default function FlipImageCard({ src, alt, className, delay = 0 }: FlipImageCardProps) {
  return (
    <MotionImage
      src={src}
      alt={alt}
      className={clsx("w-[315px] h-[384px] desktop:w-[486px] desktop:h-[593px]", className)}
      initial={{ rotateX: -90, opacity: 0 }}
      whileInView={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    />
  );
}
