"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TimelineHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  return (
    <motion.div
      className="flex w-full justify-center pt-[460px] pb-16 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
    >
      <div className="flex gap-[15px] items-center">
        <motion.div variants={itemVariants}>
          <Image src="/display/snowflake_1.svg" alt="Interaction Image" width={38} height={41} />
        </motion.div>
        <motion.p className="text-dark-blue-500 text-title-5 font-bold" variants={itemVariants}>
          32th KUSITMS
        </motion.p>
      </div>
    </motion.div>
  );
}
