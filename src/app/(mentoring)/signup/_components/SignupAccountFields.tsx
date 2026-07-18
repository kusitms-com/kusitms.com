import { useState } from "react";
import type { FieldErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import Button from "@/components/mentoring/Button";
import InputField from "@/components/mentoring/InputField";
import type { SignupFormValues } from "@/lib/validations/signup";

type SignupAccountFieldsProps = {
  register: UseFormRegister<SignupFormValues>;
  errors: FieldErrors<SignupFormValues>;
  getValues: UseFormGetValues<SignupFormValues>;
};

// TODO: 아이디 중복 확인 API 연동
const checkIdDuplicate = async (_id: string): Promise<boolean> => {
  return false;
};

const SignupAccountFields = ({ register, errors, getValues }: SignupAccountFieldsProps) => {
  const [idCheckStatus, setIdCheckStatus] = useState<"idle" | "available" | "duplicate">("idle");
  const idField = register("id");

  const handleCheckDuplicate = async () => {
    const id = getValues("id");
    if (!id) return;

    const isDuplicate = await checkIdDuplicate(id);
    setIdCheckStatus(isDuplicate ? "duplicate" : "available");
  };

  return (
    <>
      <div className="flex items-start gap-2 w-full">
        <div className="flex-1">
          <InputField
            label="아이디"
            type="id"
            placeholder="아이디를 입력해주세요"
            required
            error={!!errors.id || idCheckStatus === "duplicate"}
            helperText={
              errors.id?.message ??
              (idCheckStatus === "duplicate"
                ? "이미 사용 중인 아이디입니다"
                : idCheckStatus === "available"
                  ? "사용 가능한 아이디입니다"
                  : undefined)
            }
            {...idField}
            onChange={(e) => {
              idField.onChange(e);
              setIdCheckStatus("idle");
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="invisible flex items-center gap-0.5 text-label-14sb">아이디</div>
          <Button
            size="xl"
            variant={idCheckStatus === "available" ? "disabled" : "primary"}
            type="button"
            className="w-[111px]"
            disabled={idCheckStatus === "available"}
            onClick={handleCheckDuplicate}
          >
            {idCheckStatus === "available" ? "확인 완료" : "중복 확인"}
          </Button>
        </div>
      </div>
      <InputField
        label="이메일"
        type="email"
        placeholder="abc@gmail.com"
        required
        error={!!errors.email}
        helperText={errors.email?.message ?? "* 회원 승인 여부 전달 시 필요"}
        {...register("email")}
      />
      <InputField
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        required
        error={!!errors.password}
        helperText={errors.password?.message ?? "* 영문+숫자+특수문자, 8자 이상"}
        {...register("password")}
      />
      <InputField
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        required
        error={!!errors.passwordConfirm}
        helperText={errors.passwordConfirm?.message}
        {...register("passwordConfirm")}
      />
      <InputField
        label="이름"
        type="name"
        placeholder="이름을 입력해주세요"
        required
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register("name")}
      />
      <InputField
        label="휴대폰 번호"
        type="phoneNumber"
        placeholder="휴대폰 번호를 입력해주세요"
        required
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
        {...register("phoneNumber")}
      />
    </>
  );
};

export default SignupAccountFields;
