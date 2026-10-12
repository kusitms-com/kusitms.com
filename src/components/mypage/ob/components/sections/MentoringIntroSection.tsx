import { BookOpenText } from "lucide-react";
import { inputClass } from "@/components/mypage/ob/components/controls/inputClass";
import { Field } from "@/components/mypage/ob/components/form/Field";
import { Section } from "@/components/mypage/ob/components/form/Section";
import type { ObMentoringPresenterProps } from "@/components/mypage/ob/types";

type MentoringIntroSectionProps = Pick<
  ObMentoringPresenterProps,
  "form" | "errors" | "updateField"
>;

export function MentoringIntroSection({ form, errors, updateField }: MentoringIntroSectionProps) {
  return (
    <Section title="멘토링 소개" icon={BookOpenText}>
      <Field
        label="멘토링명"
        required
        error={errors.mentoringTitle}
        focusKey="mentoringTitle"
        className="desktop:col-span-2"
      >
        <input
          value={form.mentoringTitle}
          onChange={(event) => updateField("mentoringTitle", event.target.value)}
          placeholder="멘티에게 나를 어필할 수 있는 한 줄을 적어주세요"
          className={inputClass(Boolean(errors.mentoringTitle), !form.mentoringTitle)}
        />
      </Field>
      <Field
        label="멘토링 설명"
        required
        error={errors.mentoringDescription}
        focusKey="mentoringDescription"
        className="desktop:col-span-2"
      >
        <textarea
          value={form.mentoringDescription}
          onChange={(event) => updateField("mentoringDescription", event.target.value)}
          placeholder="상세한 멘토링 내용, 커리큘럼, 다루는 주제 등을 자유롭게 작성해주세요."
          rows={4}
          className={`${inputClass(Boolean(errors.mentoringDescription), !form.mentoringDescription)} ${
            form.mentoringDescription ? "h-[291px]" : "h-[97px]"
          } resize-none py-4 leading-6`}
        />
      </Field>
    </Section>
  );
}
