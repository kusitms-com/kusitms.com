function TeamMember({ position, members }: { position: string; members: string[] }) {
  return (
    <div className="flex desktop:gap-x-4 gap-x-3 items-center">
      <div className="bg-gray-50 rounded-[4px] text-center py-1 w-[80px]">
        <p className="tablet:text-body-8 text-body-9 text-gray-900 ">{position}</p>
      </div>
      <div className="text-gray-500 tablet:text-body-8 text-body-10">{members.join(", ")}</div>
    </div>
  );
}

export default TeamMember;
