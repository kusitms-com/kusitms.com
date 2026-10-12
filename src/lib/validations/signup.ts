import { z } from "zod";

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const PHONE_REGEX = /^01[0-9]-?\d{3,4}-?\d{4}$/;

export const signupSchema = z
  .object({
    id: z.string().min(1, "아이디를 입력해주세요"),
    email: z.string().min(1, "이메일을 입력해주세요").email("올바른 이메일 형식이 아닙니다"),
    password: z.string().regex(PASSWORD_REGEX, "영문+숫자+특수문자, 8자 이상"),
    passwordConfirm: z.string().min(1, "비밀번호를 다시 입력해주세요"),
    name: z.string().min(1, "이름을 입력해주세요"),
    phoneNumber: z.string().regex(PHONE_REGEX, "올바른 휴대폰 번호를 입력해주세요"),
    generation: z.string().min(1, "활동 기수를 선택해주세요"),
    part: z.string().min(1, "파트를 선택해주세요"),
    certificateFile: z.instanceof(File).nullable(),
    profileFile: z.instanceof(File).nullable(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["passwordConfirm"],
  })
  .refine((data) => data.profileFile !== null, {
    message: "프로필 사진을 업로드해주세요",
    path: ["profileFile"],
  })
  .refine((data) => parseInt(data.generation, 10) > 25 || data.certificateFile !== null, {
    message: "수료증을 업로드해주세요",
    path: ["certificateFile"],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
