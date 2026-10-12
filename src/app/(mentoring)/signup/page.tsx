"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "@/components/mentoring/Button";
import { type SignupFormValues, signupSchema } from "@/lib/validations/signup";
import SignupAccountFields from "./_components/SignupAccountFields";
import SignupActivityFields from "./_components/SignupActivityFields";
import SignupFileFields from "./_components/SignupFileFields";

const page = () => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      id: "",
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      phoneNumber: "",
      generation: "",
      part: "",
      certificateFile: null,
      profileFile: null,
    },
  });

  const generation = watch("generation");
  const isEligibleForCertificate = generation !== "" && parseInt(generation, 10) <= 25;

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
    // biome-ignore lint/suspicious/noDocumentCookie: Cookie Store API is unsupported in Safari/iOS
    document.cookie = "signup_completed=1; path=/; max-age=300";
    router.replace("/signup/complete");
  };

  return (
    <div className="w-full">
      <h1 className="text-label-normal text-mobile-28b mt-7 mb-8 text-center">회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-11">
        <div className="flex flex-col gap-8 w-full">
          <SignupAccountFields register={register} errors={errors} getValues={getValues} />
          <SignupActivityFields control={control} />
          <SignupFileFields control={control} isEligibleForCertificate={isEligibleForCertificate} />
        </div>
        <Button
          size="xl"
          variant={isValid && !isSubmitting ? "strong" : "disabled"}
          className="w-full"
          disabled={!isValid || isSubmitting}
          type="submit"
        >
          회원가입
        </Button>
      </form>
    </div>
  );
};

export default page;
