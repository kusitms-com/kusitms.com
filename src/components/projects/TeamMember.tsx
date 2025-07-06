import React from "react";

function TeamMember({ role, members }: { role: string; members: string[] }) {
  return (
    <div className="flex desktop:gap-x-4 gap-x-3 items-center">
      <div className="desktop:text-[18px] text-[12px] text-[#CCC] desktop:w-[78px] w-[55px]">
        {role}
      </div>
      <div className="desktop:h-[16px] h-[12px] border-r border-[#949494]" />
      <div className="desktop:text-[18px] text-[12px] truncate max-w-[200px]">
        {members.join(", ")}
      </div>
    </div>
  );
}

export default TeamMember;
