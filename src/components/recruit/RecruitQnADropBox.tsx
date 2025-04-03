import React, { ReactNode } from "react";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";

export const RecruitQnADropBox = ({question, answer, isOpen, onToggle} : {
    question: string;
    answer: (string | React.JSX.Element)[];
    isOpen: boolean;
    onToggle: () => void;
}) => {
    return (
        <div
            onClick={onToggle}
            className="flex flex-col gap-y-6 rounded-[32px] bg-[#F2F2F8] px-12 py-10 w-[980px] cursor-pointer"
        >
            <RecruitQnADropBox.Question isOpen={isOpen}>
                <p className="flex gap-x-2 text-black text-[20px] font-semibold">
                    <span className="text-[#0055FF]">Q</span>
                    {question}
                </p>
            </RecruitQnADropBox.Question>
            <RecruitQnADropBox.Answer isOpen={isOpen}>
                <div className="text-[#5D5E67] text-[20px] flex flex-col gap-y-1">
                    {answer.map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))}
                </div>
            </RecruitQnADropBox.Answer>
        </div>
    );
};

const RecruitQnADropBoxQuestion = ({children, isOpen} : { children: ReactNode; isOpen: boolean; }) => {
    return (
        <div className="flex justify-between items-center w-full">
            {children}
            <Image
                src={isOpen ? "/recruit/icons/DropUp.svg" : "/recruit/icons/DropDown.svg"}
                alt="화살표"
                width={28}
                height={28}
                priority
                style={{ width: 28, height: 28 }}
            />
        </div>
    );
};

const RecruitQnADropBoxAnswer = ({children, isOpen}: { children: ReactNode; isOpen: boolean; }) => {
    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 0.8, 0.25, 1]
                    }}
                    className="overflow-hidden"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

RecruitQnADropBox.Question = RecruitQnADropBoxQuestion;
RecruitQnADropBox.Answer = RecruitQnADropBoxAnswer;
