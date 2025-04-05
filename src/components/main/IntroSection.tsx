"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const IntroSection = () => {
    const wordVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };
    const sentence = "비전을 가지고 \n 함께 성장하는 학회";
    return (
        <div className={"mt-[120px] flex flex-col items-center justify-center"}>
            <section>
                <div className="text-[72px] font-black text-center leading-tight">
                    {sentence.split("").map((char, index) => {
                        const delay = index * 0.1;

                        return (
                            <React.Fragment key={index}>
                                <motion.span
                                    initial={{opacity: 0}}
                                    animate={{opacity: [0, 1, 0.3, 1]}}
                                    transition={{
                                        duration: 3,
                                        delay,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut",
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>

                                {sentence.slice(0, index + 1) === "비전을 가지고" && <br/>}
                            </React.Fragment>
                        );
                    })}
                </div>
                <div className="relative">
                    <Image
                        className="relative z-10"
                        src="/main/MainGroupSticker.svg"
                        alt="스티커"
                        width={1258}
                        height={570}
                        priority
                        style={{width: 1258, height: 570}}
                    />
                    <Image
                        className="absolute top-20 left-0 z-0"
                        src="/main/MainBlueArrow.svg"
                        alt="화살표"
                        width={1430}
                        height={246}
                        priority
                        style={{width: 1430, height: 246}}
                    />
                </div>
            </section>
            <section className={"flex flex-col justify-center items-center pt-[140px] pb-[162px]"}>
                <div className={"flex gap-x-[370px] items-center"}>
                    <div className={"flex flex-col gap-y-[200px]"}>
                        <p className={"flex flex-col text-[72px] font-bold"}>
                            {["Vision", "Growth", "Together"].map((word, i) => (
                                <motion.span
                                    key={word}
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                    variants={wordVariants}
                                >
                                {word}
                                </motion.span>
                            ))}
                        </p>
                        <p className={"text-[36px]"}>Korean University Students <br/>
                            IT, Management Society</p>
                    </div>

                    <div className={"relative "}>
                        <motion.div
                            initial={{opacity: 0, y: -50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            viewport={{once: true}}
                        >
                            <Image
                                src="/main/LOGO.svg"
                                alt="로고"
                                width={400}
                                height={278}
                                priority
                                style={{width: 400, height: 278}}
                            />
                        </motion.div>
                        <p className="absolute top-10 text-[#F2F2F8] text-[170px] opacity-5 transform rotate-270 inline-block">
                            KUSITMS
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default IntroSection;
