"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import UploadedFile from "@/components/mentoring/UploadedFile";
import { cn } from "@/lib/utils";

const ACCEPTED_TYPES = ["image/jpeg", "image/png"];
const MAX_SIZE = 10 * 1024 * 1024;

type FileUploadProps = {
  helperText?: string;
  onFileChange?: (file: File | null) => void;
};

const FileUpload = ({ helperText, onFileChange }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState(false);

  const handleFileChange = (nextFile: File | null) => {
    if (nextFile && (!ACCEPTED_TYPES.includes(nextFile.type) || nextFile.size > MAX_SIZE)) {
      setError(true);
      setFile(null);
      onFileChange?.(null);
      return;
    }

    setError(false);
    setFile(nextFile);
    onFileChange?.(nextFile);
  };

  if (file) {
    return <UploadedFile fileName={file.name} />;
  }

  return (
    <>
      <div
        className={cn(
          "w-full py-6 border border-line-neutral bg-fill-normal rounded-[8px] cursor-pointer",
          error && "border-status-negative",
        )}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
        />
        <div className="flex flex-row justify-center pb-1">
          <Image src="/mentoring/icons/UploadIcon.svg" alt="" width={18} height={18} />
          <p className="ml-1 mr-1.5 text-caption-12sb text-label-alternative">업로드</p>
        </div>
        <p className="text-label-assitive text-caption-12r text-center">jpg/png, 10MB 이하</p>
      </div>
      {error ? (
        <div className="flex items-center gap-0.5 text-caption-12r text-status-negative">
          <Image
            src="/mentoring/icons/CautionIcon.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
          올바른 형식의 파일을 업로드해주세요
        </div>
      ) : (
        helperText && <p className="text-label-light text-caption-12r">{helperText}</p>
      )}
    </>
  );
};

export default FileUpload;
