"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { EXECUTIVE_DATA, type ExecutiveItem } from "@/constants/executiveData";

function ExecutiveCarousel({ items }: { items: ExecutiveItem[] }) {
  const [index, setIndex] = useState(0);
  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1)),
    [items.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1)),
    [items.length],
  );
  const current = items[index];

  return (
    <div className="relative w-full px-10 pb-[100px] desktop:pb-[240px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[16px] items-center justify-center mb-16"
      >
        <p className="text-title-5 desktop:text-title-5 text-black">큐밀리를 이끌어나갈 운영진</p>
        <p className="text-center text-body-4 desktop:text-[20px] text-gray-500">
          KUSITMS 활동을 이끄는 운영진으로 네 가지 팀으로 이루어져있어요
          <br />
          학부학, 경영총괄팀, 대외홍보팀, 교육기획팀으로 구성돼요
        </p>
      </motion.div>
      <motion.div
        key={current.image}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <Image
          className="w-full h-auto rounded-[16px]"
          src={current.image}
          alt={current.title}
          width={944}
          height={571}
        />
        <div className="absolute inset-x-0 bottom-0 px-[108px] pb-[50px]">
          <p className="text-[18px] desktop:text-title-7 font-bold text-gray-900">
            {current.title}
          </p>
          <p className="mt-2 text-[13px] desktop:text-body-6 text-gray-600 leading-relaxed">
            {current.description}
          </p>
        </div>
        <button
          type="button"
          aria-label="previous"
          onClick={prev}
          className="cursor-pointer absolute left-9 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/30 text-gray-900 flex items-center justify-center"
        >
          <Image src="/projects/icons/ArrowLeft.svg" alt="prev" width={20} height={20} />
        </button>
        <button
          type="button"
          aria-label="next"
          onClick={next}
          className="cursor-pointer absolute right-9 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/30  text-gray-900 flex items-center justify-center"
        >
          <Image src="/projects/icons/ArrowRight.svg" alt="next" width={20} height={20} />
        </button>
      </motion.div>
      <div className="mt-2 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={
              i === index ? "w-2 h-2 rounded-full bg-gray-400" : "w-2 h-2 rounded-full bg-gray-100"
            }
          />
        ))}
      </div>
    </div>
  );
}

export default function ExecutiveSection() {
  return (
    <section className="max-w-[1024px] mx-auto flex flex-col gap-y-[40px] pt-4 w-full items-center">
      <ExecutiveCarousel items={EXECUTIVE_DATA} />
    </section>
  );
}
