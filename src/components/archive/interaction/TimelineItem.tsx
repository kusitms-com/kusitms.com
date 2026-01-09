"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface TimelineItemProps {
  isLeft: boolean;
  children: ReactNode;
}

export default function TimelineItem({ isLeft, children }: TimelineItemProps) {
  const direction = isLeft ? -50 : 50;

  const itemVariants = {
    hidden: { opacity: 0, x: direction },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className={`relative w-full flex mb-8 ${isLeft ? "justify-start" : "justify-end"}`}
      initial="hidden"
      whileInView="visible"
      variants={itemVariants}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div
        className={`desktop:w-[368px] desktop:mx-10 tablet:px-0 px-4 flex flex-col items-center text-left desktop:${isLeft ? "text-right" : "text-left"}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
