import React from "react";

function TeamMember({ role, members }: { role: string; members: string[] }) {
  return (
    <div className="flex gap-x-4 items-center">
      <div className="text-[18px] text-[#CCC] w-[78px]">{role}</div>
      <div className="h-[16px] border-r border-[#949494]" />
      <div> {members.join(", ")}</div>
    </div>
  );
}

export default TeamMember;
