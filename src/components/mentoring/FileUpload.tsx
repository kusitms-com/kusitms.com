"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import UploadedFile from "@/components/mentoring/UploadedFile";

type FileUploadProps = {
  helperText?: string;
};

const FileUpload = ({ helperText }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  if (file) {
    return <UploadedFile fileName={file.name} />;
  }

  return (
    <>
      <div
        className="w-full py-6 border border-line-neutral bg-fill-normal rounded-[8px] cursor-pointer"
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <div className="flex flex-row justify-center pb-1">
          <Image src="/mentoring/icons/UploadIcon.svg" alt="" width={18} height={18} />
          <p className="ml-1 mr-1.5 text-caption-12sb text-label-alternative">업로드</p>
        </div>
        <p className="text-label-assitive text-caption-12r text-center">jpg/png, 10MB 이하</p>
      </div>
      {helperText && (
        <p className="text-label-light text-caption-12r">{helperText}</p>
      )}
    </>
  );
};

export default FileUpload;
