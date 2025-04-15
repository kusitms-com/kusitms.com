"use client";

import { motion } from "framer-motion";
import React from "react";

type FlipImageCardProps = {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
};

export const FlipImageCard = ({
  src,
  alt,
  className,
  delay = 0,
}: FlipImageCardProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={{ rotateX: -90, opacity: 0 }}
      whileInView={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
      style={{
        width: 486,
        height: 593,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    />
  );
};
