import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import { type TeamItem } from "@/constants/teamData";

export default function TeamCard({
    mainIcon,
    bgIcon,
    title,
    subtitle,
    delay,
    description,
    active,
    onActivate,
    onDeactivate,
  }: TeamItem & { active: boolean; onActivate: () => void; onDeactivate: () => void }) {
    const baseWidth = 224;
    const expandedWidth = baseWidth * 2;
  
    return (
      <motion.div
        className={clsx("relative flex-shrink-0 overflow-visible cursor-pointer")}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onClick={() => (active ? onDeactivate() : onActivate())}
        initial={{ opacity: 0, y: 20, width: baseWidth }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ width: active ? expandedWidth : baseWidth, height: 317.692 }}
        transition={{
          opacity: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
          y: { duration: 0.7, ease: "easeOut", delay: delay || 0 },
          width: { type: "spring", stiffness: 180, damping: 22, mass: 0.9 },
          height: { type: "spring", stiffness: 180, damping: 22, mass: 0.9 },
        }}
        viewport={{ once: true }}
        style={{ height: 317.692, willChange: "width, transform" }}
      >
        <div
          className={clsx("relative w-full h-full px-[18.1px] py-[13.6px] bg-sky-50 overflow-hidden")}
          style={{
            borderRadius: "9.077px",
            border: "2px solid #F0F4FF",
            boxShadow: "0px 4px 10px 0px rgba(121, 212, 255, 0.20)",
          }}
        >
        <motion.div
          className="absolute top-0 left-0"
          animate={{ scale: active ? 1.5 : 1, x: active ? 10 : 0, y: active ? 10 : 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <img src={bgIcon} alt={title} className="w-full h-full object-cover" />
        </motion.div>
        <div className="relative z-10 pr-2">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-baseline gap-2">
              <span className="text-dark-blue-500 text-[22.692px] font-semibold leading-none">
                {title.split(" ")[0]}
              </span>
              <div>
                <span className="text-gray-900 text-[27.2px] font-semibold leading-none">
                  {title.split(" ")[1]}
                </span>
                <p className="text-[15.88px] font-semibold text-gray-600">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className={clsx("absolute", title.includes("Backend") ? "right-[-30px] bottom-[35px]" : "right-[-45px]")}
          animate={{ scale: active ? 1.3 : 1, rotate: active ? 28 : 0, x: active ? -40 : 0, y: active ? -10 : 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.9 }}
        >
          <img src={mainIcon} alt={title} />
        </motion.div>
        <motion.div
          className="absolute left-[53px] bottom-[33px]"
          initial={false}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-body-6 text-gray-600 leading-5 whitespace-pre-line">{description}</p>
        </motion.div>
        </div>
      </motion.div>
    );
  }