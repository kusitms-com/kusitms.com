"use client";
import { PageNavButton } from "@kusitms.com/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { EXECUTIVE_DATA, type ExecutiveItem } from "@/constants/executiveData";

function MobileExecutiveCarousel({ items }: { items: ExecutiveItem[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  }, [items.length]);
  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);
  const current = items[index];

  return (
    <div className="relative w-full px-4 pb-[160px] block tablet:hidden overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[16px] items-center justify-center mb-[52px]"
      >
        <p className="text-center text-title-7 text-black">
          큐밀리를
          <br /> 이끌어나갈 운영진
        </p>
        <p className="text-center text-body-8 text-gray-500">
          KUSITMS 활동을 이끄는 운영진으로 네 가지
          <br /> 팀으로 이루어져있어요. 학부학, 경영총괄팀,
          <br /> 대외홍보팀, 교육기획팀으로 구성돼요.
        </p>
      </motion.div>
      <motion.div
        key={current.image}
        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[16px] bg-white"
        style={{
          touchAction: "pan-x",
          WebkitTouchCallout: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          const threshold = 50;
          if (info.offset.x > threshold) {
            prev();
          } else if (info.offset.x < -threshold) {
            next();
          }
        }}
      >
        <div className="relative">
          <Image
            className="block w-full h-auto"
            src={current.image}
            alt={current.title}
            width={944}
            height={571}
          />
          <button
            type="button"
            aria-label="previous"
            onClick={prev}
            className="absolute left-0 top-0 bottom-0 w-1/2 cursor-pointer"
          />
          <button
            type="button"
            aria-label="next"
            onClick={next}
            className="absolute right-0 top-0 bottom-0 w-1/2 cursor-pointer"
          />
        </div>
        <div className="px-5 pt-3 pb-5 tablet:px-6">
          <p className="text-body-7 font-bold text-gray-700">{current.title}</p>
          <p className="mt-1 text-body-9 text-gray-500 leading-relaxed">{current.description}</p>
        </div>
      </motion.div>
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={
              i === index
                ? "w-[6px] h-[6px] rounded-full bg-gray-400"
                : "w-[6px] h-[6px] rounded-full bg-gray-100"
            }
          />
        ))}
      </div>
    </div>
  );
}

function DesktopExecutiveCarousel({ items }: { items: ExecutiveItem[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  }, [items.length]);
  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  }, [items.length]);
  const current = items[index];

  return (
    <div className="relative w-full tablet:px-6 desktop:px-10 pb-[240px] hidden tablet:block">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-[16px] items-center justify-center mb-16"
      >
        <p className="text-center text-title-5 text-black">큐밀리를 이끌어나갈 운영진</p>
        <p className="text-center text-body-4 text-gray-500">
          KUSITMS 활동을 이끄는 운영진으로 네 가지 팀으로 이루어져있어요
          <br />
          학부학, 경영총괄팀, 대외홍보팀, 교육기획팀으로 구성돼요
        </p>
      </motion.div>
      <motion.div
        key={current.image}
        initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden rounded-[16px] bg-white"
      >
        <div className="relative">
          <Image
            className="block w-full h-auto"
            src={current.image}
            alt={current.title}
            width={944}
            height={571}
          />
          <div className="absolute left-9 top-1/2 -translate-y-1/2">
            <PageNavButton direction="prev" color="dark" onClick={prev} />
          </div>
          <div className="absolute right-9 top-1/2 -translate-y-1/2">
            <PageNavButton direction="next" color="dark" onClick={next} />
          </div>
        </div>
        <div className="px-[108px] pt-6 pb-10">
          <p className="text-title-7 font-bold text-gray-900">{current.title}</p>
          <p className="mt-2 text-body-6 text-gray-700 leading-relaxed">{current.description}</p>
        </div>
      </motion.div>
      <div className="mt-[20px] flex items-center justify-center gap-2">
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
      <MobileExecutiveCarousel items={EXECUTIVE_DATA} />
      <DesktopExecutiveCarousel items={EXECUTIVE_DATA} />
    </section>
  );
}
