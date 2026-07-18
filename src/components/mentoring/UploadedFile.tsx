import Image from "next/image";

type UploadedFileProps = {
  fileName: string;
};

const UploadedFile = ({ fileName }: UploadedFileProps) => {
  return (
    <div className="w-fit rounded-[8px] border border-line-neutral bg-fill-netural p-3 flex-row gap-1 flex">
      <Image src="/mentoring/icons/ClipIcon.svg" alt="" width={20} height={20} />
      <p className="text-label-light text-label-14r">{fileName}</p>
    </div>
  );
};

export default UploadedFile;
