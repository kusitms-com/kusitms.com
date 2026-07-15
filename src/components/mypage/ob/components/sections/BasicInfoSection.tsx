import { User } from "lucide-react";
import { Checkbox } from "@/components/mypage/ob/components/controls/Checkbox";
import { inputClass } from "@/components/mypage/ob/components/controls/inputClass";
import { SegmentedControl } from "@/components/mypage/ob/components/controls/SegmentedControl";
import { Select } from "@/components/mypage/ob/components/controls/Select";
import { UploadField } from "@/components/mypage/ob/components/controls/UploadField";
import { Field } from "@/components/mypage/ob/components/form/Field";
import { Section } from "@/components/mypage/ob/components/form/Section";
import { companyTypes, jobTypes } from "@/components/mypage/ob/constants";
import type { ObMentoringPresenterProps } from "@/components/mypage/ob/types";

type BasicInfoSectionProps = Pick<
  ObMentoringPresenterProps,
  "form" | "errors" | "updateField" | "handleFileChange"
>;

export function BasicInfoSection({
  form,
  errors,
  updateField,
  handleFileChange,
}: BasicInfoSectionProps) {
  return (
    <Section title="기본 정보" icon={User}>
      <Field
        label="한 줄 소개"
        required
        error={errors.oneLineIntro}
        focusKey="oneLineIntro"
        className="desktop:col-span-2"
      >
        <textarea
          value={form.oneLineIntro}
          onChange={(event) => updateField("oneLineIntro", event.target.value)}
          placeholder="예: 큐시즘 29기 백엔드 파트로 활동했고, 현재 스타트업에서 3년차 백엔드 엔지니어로 근무 중입니다."
          className={`${inputClass(Boolean(errors.oneLineIntro), !form.oneLineIntro)} h-[98px] resize-none py-4 leading-6`}
        />
      </Field>
      <Field label="경력 사항" required error={errors.careerSummary} focusKey="careerSummary">
        <input
          value={form.careerSummary}
          onChange={(event) => updateField("careerSummary", event.target.value)}
          placeholder="예: 서비스 기획 3년차"
          className={inputClass(Boolean(errors.careerSummary), !form.careerSummary)}
        />
      </Field>
      <Field label="직무 유형" required error={errors.jobType} focusKey="jobType">
        <Select
          value={form.jobType}
          placeholder="직무 유형"
          options={jobTypes}
          onChange={(value) => updateField("jobType", value)}
          invalid={Boolean(errors.jobType)}
        />
      </Field>
      <Field label="프로필 사진" required error={errors.profileFile} focusKey="profileFile">
        <UploadField
          fileName={form.profileFile}
          invalid={Boolean(errors.profileFile)}
          onChange={handleFileChange}
        />
      </Field>
      <Field label="밋업 프로젝트">
        <input
          value={form.meetupProject}
          onChange={(event) => updateField("meetupProject", event.target.value)}
          placeholder="큐책"
          className={inputClass(false, !form.meetupProject)}
        />
        <Checkbox
          label="공개여부"
          checked={form.meetupProjectPublic}
          onChange={() => updateField("meetupProjectPublic", !form.meetupProjectPublic)}
        />
      </Field>
      <Field label="회사명">
        <input
          value={form.companyName}
          onChange={(event) => updateField("companyName", event.target.value)}
          placeholder="예: 현대오토에버"
          className={inputClass(false, !form.companyName)}
        />
        <Checkbox
          label="공개여부"
          checked={form.companyPrivate}
          onChange={() => updateField("companyPrivate", !form.companyPrivate)}
        />
      </Field>
      <Field label="회사 유형">
        <SegmentedControl
          options={companyTypes}
          value={form.companyType}
          onChange={(value) => updateField("companyType", value)}
        />
      </Field>
      <Field label="회사 도메인">
        <input
          value={form.companyDomain}
          onChange={(event) => updateField("companyDomain", event.target.value)}
          placeholder="예: B2B 모빌리티 소프트웨어 기업"
          className={inputClass(false, !form.companyDomain)}
        />
      </Field>
      <Field label="재직 중인 팀">
        <input
          value={form.currentTeam}
          onChange={(event) => updateField("currentTeam", event.target.value)}
          placeholder="예: 정보 보안팀"
          className={inputClass(false, !form.currentTeam)}
        />
      </Field>
    </Section>
  );
}
