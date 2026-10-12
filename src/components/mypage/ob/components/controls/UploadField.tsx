import { Paperclip, Upload } from "lucide-react";
import type { ChangeEvent } from "react";

type UploadFieldProps = {
  fileName: string;
  invalid?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function UploadField({ fileName, invalid = false, onChange }: UploadFieldProps) {
  return (
    <>
      <label
        className={`flex h-12 cursor-pointer items-center justify-center gap-2 rounded-[8px] border text-sm font-medium transition hover:bg-[#f7f9ff] ${
          fileName ? "w-[153px] bg-[#f7f7f9] px-4 text-[#505665]" : "w-full bg-white text-[#343946]"
        } ${invalid ? "border-[#e52222]" : "border-[#dfe2ea]"}`}
      >
        {fileName ? <Paperclip size={16} /> : <Upload size={16} />}
        {fileName || "사진 업로드"}
        <input type="file" accept="image/*" className="hidden" onChange={onChange} />
      </label>
      <p className="mt-2 truncate text-xs text-[#5f6675]">
        {fileName
          ? "* 멘토링 카드에 노출되는 공개 이미지입니다."
          : "* jpg/png, 10MB 이하 파일을 올려주세요"}
      </p>
    </>
  );
}
