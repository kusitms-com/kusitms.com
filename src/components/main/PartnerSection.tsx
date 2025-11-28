"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PARTNERS } from "@/constants/partners";

export default function PartnerSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={
        "hidden min-[768px]:flex max-w-[1024px] mx-auto pt-4 px-4 min-[768px]:px-10 pb-[100px] min-[768px]:pb-[120px] flex-col justify-center items-center"
      }
    >
      <h1 className="text-[23px] min-[768px]:text-title-5 text-gray-900 text-center font-semibold">
        KUSITMS 파트너사
      </h1>
      <p className="mt-4 text-[13px] min-[768px]:text-body-4 text-center text-gray-500">
        큐시즘과 함께 청년 IT경영의 내일을 만들어갈 다양한 후원사를 기다립니다.
        <br />
        여러분의 후원이 IT경영의 미래를 만듭니다
      </p>
      <div className="relative mt-[48px] min-[768px]:mt-[54px] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-transparent" />
        <motion.div
          className="flex items-center w-[max-content]"
          initial={{ x: "-50%" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <Image key={idx} src={partner} alt={`partner-${idx}`} width={224} height={153} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
