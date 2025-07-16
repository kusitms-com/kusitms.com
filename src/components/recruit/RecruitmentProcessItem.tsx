import MobileRecruitmentProcessItem from "@/components/recruit/MobileRecruitmentProcessItem";
import DesktopRecruitmentProcessItem from "@/components/recruit/DesktopRecruitmentProcessItem";

export default function RecruitmentProcessItem() {
    return (
        <div>
            <MobileRecruitmentProcessItem/>
            <DesktopRecruitmentProcessItem />
        </div>
    );
}
