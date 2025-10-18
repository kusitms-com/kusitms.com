import DesktopRecruitmentProcessItem from "@/components/recruit/DesktopRecruitmentProcessItem";
import MobileRecruitmentProcessItem from "@/components/recruit/MobileRecruitmentProcessItem";

export default function RecruitmentProcessItem() {
  return (
    <div>
      <MobileRecruitmentProcessItem />
      <DesktopRecruitmentProcessItem />
    </div>
  );
}
