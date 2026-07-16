import { type Control, Controller } from "react-hook-form";
import FileUpload from "@/components/mentoring/FileUpload";
import type { SignupFormValues } from "@/lib/validations/signup";

type SignupFileFieldsProps = {
  control: Control<SignupFormValues>;
  isEligibleForCertificate: boolean;
};

const SignupFileFields = ({ control, isEligibleForCertificate }: SignupFileFieldsProps) => {
  return (
    <>
      {isEligibleForCertificate && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-0.5">
            <p className="text-label-14sb text-label-alternative">수료증 업로드</p>
            <p className="text-status-negative text-label-14sb">*</p>
          </div>
          <Controller
            control={control}
            name="certificateFile"
            render={({ field }) => (
              <FileUpload
                helperText="* 큐시즘 활동 인증 가능한 자료도 가능합니다"
                onFileChange={field.onChange}
              />
            )}
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-0.5">
          <p className="text-label-14sb text-label-alternative">프로필 사진</p>
          <p className="text-status-negative text-label-14sb">*</p>
        </div>
        <Controller
          control={control}
          name="profileFile"
          render={({ field }) => (
            <FileUpload
              helperText="* 가이드 문구(공개 여부나 활용되는 곳 설명)"
              onFileChange={field.onChange}
            />
          )}
        />
      </div>
    </>
  );
};

export default SignupFileFields;
