import React from "react";

function TeamMember({ role, members }: { role: string; members: string[] }) {
  return (
    <div className="flex desktop:gap-x-4 gap-x-3 items-center">
      <div className="bg-gray-50 rounded-[4px] text-center py-1 w-[80px]">
        <p className="text-body-8 text-gray-900 ">{role}</p>
      </div>
      <div className="text-gray-500 text-body-8">{members.join(", ")}</div>
    </div>
  );
}

export default TeamMember;
