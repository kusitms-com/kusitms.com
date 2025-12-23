import { motion } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { type ReactNode, useEffect, useRef, useState } from "react";

export default function RecruitQnADropBox({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: (string | React.JSX.Element)[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      className="flex flex-col rounded-[20px] bg-gray-50 px-[28px] desktop:px-[40px] py-[20px] desktop:py-[32px] cursor-pointer"
    >
      <RecruitQnADropBox.Question isOpen={isOpen}>
        <p className="flex gap-x-2 text-black text-body-6 desktop:text-body-2 items-baseline">
          <span className="text-dark-blue-500 text-body-1 desktop:text-title-7">Q.</span>
          {question}
        </p>
      </RecruitQnADropBox.Question>
      <RecruitQnADropBox.Answer isOpen={isOpen}>
        <div className="flex gap-x-2 pt-[20px] text-body-6 desktop:text-body-2 items-baseline">
          <span className="text-dark-blue-300 text-body-1 desktop:text-title-7">A.</span>
          <div className="text-gray-700">
            {answer.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      </RecruitQnADropBox.Answer>
    </div>
  );
}

const RecruitQnADropBoxQuestion = ({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      {children}
      <Image
        src={isOpen ? "/recruit/icons/DropUp.svg" : "/recruit/icons/DropDown.svg"}
        alt="DropDown"
        width={16}
        height={8}
      />
    </div>
  );
};

const RecruitQnADropBoxAnswer = ({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={{ height, opacity: isOpen ? 1 : 0 }}
      transition={{
        height: {
          duration: isOpen ? 0.3 : 0.5,
          ease: [0.4, 0, 0.2, 1],
        },
        opacity: {
          duration: isOpen ? 0.2 : 0.4,
        },
      }}
      className="overflow-hidden"
    >
      <div ref={contentRef} className="">
        {children}
      </div>
    </motion.div>
  );
};

RecruitQnADropBox.Question = RecruitQnADropBoxQuestion;
RecruitQnADropBox.Answer = RecruitQnADropBoxAnswer;
