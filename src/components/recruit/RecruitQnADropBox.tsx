import React, {ReactNode, useEffect, useRef, useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      className="flex flex-col desktop:gap-y-6 gap-y-[20px] rounded-[32px] bg-[#F2F2F8] desktop:px-12 desktop:pt-10 desktop:pb-4 px-[28px] py-[28px] pb-[6px]  desktop:w-[980px] w-[350px] cursor-pointer"
    >
      <RecruitQnADropBox.Question isOpen={isOpen}>
        <p className="flex gap-x-2 text-black desktop:text-[20px] text-[16px]">
          <span className="text-[#0055FF]">Q</span>
          {question}
        </p>
      </RecruitQnADropBox.Question>
      <RecruitQnADropBox.Answer isOpen={isOpen}>
        <div className="text-[#5D5E67] desktop:text-[20px] text-[16px] flex flex-col gap-y-1">
          {answer.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
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
        src={
          isOpen ? "/recruit/icons/DropUp.svg" : "/recruit/icons/DropDown.svg"
        }
        alt="DropDown"
        width={28}
        height={28}
        style={{ width: 28, height: 28 }}
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
  }, [isOpen, children]);

  return (
      <motion.div
          initial={false}
          animate={{height, opacity: isOpen ? 1 : 0}}
          transition={{
            height: {
              duration: isOpen ? 0.3 : 0.5,
              ease: [0.4, 0, 0.2, 1],
            },
            opacity: {
              duration: isOpen ? 0.2 : 0.4,
            },
          }}
          style={{overflow: "hidden"}}
      >
        <div ref={contentRef} className='pb-6'>
          {children}
        </div>
      </motion.div>
  );
};

RecruitQnADropBox.Question = RecruitQnADropBoxQuestion;
RecruitQnADropBox.Answer = RecruitQnADropBoxAnswer;
