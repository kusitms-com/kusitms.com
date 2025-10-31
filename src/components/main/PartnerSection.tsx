"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function PartnerSection() {
  const partners = [
    {
      image: "/main/img/partner/Seoul.png",
    },
    {
      image: "/main/img/partner/LetsCareer.png",
    },
    {
      image: "/main/img/partner/SniperFactory.png",
    },
    {
      image: "/main/img/partner/FLab.png",
    },
    {
      image: "/main/img/partner/Dcamp.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={
        "pt-4 px-10 pb-[100px] desktop:pb-[120px] flex flex-col justify-center items-center"
      }
    >
      <h1 className="text-[23px] desktop:text-title-5 text-gray-900 text-center font-semibold">KUSITMS 파트너사</h1>
      <p className="mt-4 text-[13px] desktop:text-body-4 text-center text-gray-500">
      큐시즘과 함께 청년 IT경영의 내일을 만들어갈 다양한 후원사를 기다립니다.<br />여러분의 후원이 IT경영의 미래를 만듭니다
      </p>
      <div className="relative mt-[48px] desktop:mt-[54px] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-transparent" />
        <motion.div
          className="flex items-center w-[max-content]"
          initial={{ x: "-50%" }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <Image
              key={idx}
              src={partner.image}
              alt={`partner-${idx}`}
              width={224}
              height={153}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}