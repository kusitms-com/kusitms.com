import {ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface JobRequirementProps {
    children: ReactNode;
    title: string;
    style?: string;
}

export const Recruit = ({children, title, style}: JobRequirementProps) => {
    return (
        <div className={twMerge("flex flex-col items-center gap-y-[100px] w-full", style)}>
            <h1 className="font-extrabold text-[48px] leading-[100%] tracking-[0%]">{title}</h1>
            {children}
        </div>
    );
};

const RecruitCard = ({children}: { children: ReactNode }) => {
    return (
        <div className="relative pt-[50px]">{children}</div>
    );
};

const RecruitCardIcon = ({ children }: { children: ReactNode }) => {
    return (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white rounded-[32px] w-[100px] h-[100px]">{children}</div>
    );
};

const RecruitCardContent = ({ children }: { children: ReactNode }) => {
    return (
        <div className={"rounded-[32px] bg-[#2F3038] w-[380px] pb-[63px] pt-[90px]"}>{children}</div>
    );
};

const RecruitInfoCard = ({children, style}: { children: ReactNode, style?: string }) => {
    return (
        <div className={twMerge("w-full bg-[#2F303899] rounded-[32px] h-[240px]", style)}>{children}</div>
    );
};

Recruit.Card = RecruitCard;
Recruit.Icon = RecruitCardIcon;
Recruit.Content = RecruitCardContent;
Recruit.InfoCard = RecruitInfoCard;
