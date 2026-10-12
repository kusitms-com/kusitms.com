import { type Control, Controller } from "react-hook-form";
import Dropdown from "@/components/mentoring/Dropdown";
import type { SignupFormValues } from "@/lib/validations/signup";

type SignupActivityFieldsProps = {
  control: Control<SignupFormValues>;
};

const SignupActivityFields = ({ control }: SignupActivityFieldsProps) => {
  return (
    <div className="flex flex-row gap-3 w-full">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-row gap-0.5">
          <p className="text-label-14sb text-label-alternative">활동 기수</p>
          <p className="text-status-negative text-label-14sb">*</p>
        </div>
        <Controller
          control={control}
          name="generation"
          render={({ field }) => (
            <Dropdown
              options={Array.from({ length: 33 }, (_, i) => `${33 - i}기`)}
              placeholder="활동 기수"
              value={field.value ? `${field.value}기` : undefined}
              onChange={(value) => field.onChange(value.replace("기", ""))}
            />
          )}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-row gap-0.5">
          <p className="text-label-14sb text-label-alternative">파트</p>
          <p className="text-status-negative text-label-14sb">*</p>
        </div>
        <Controller
          control={control}
          name="part"
          render={({ field }) => (
            <Dropdown
              options={["기획", "디자인", "프론트엔드", "백엔드"]}
              placeholder="파트"
              value={field.value || undefined}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </div>
  );
};

export default SignupActivityFields;
