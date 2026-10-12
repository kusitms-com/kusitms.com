import { Clock3 } from "lucide-react";
import { SegmentedControl } from "@/components/mypage/ob/components/controls/SegmentedControl";
import { Select } from "@/components/mypage/ob/components/controls/Select";
import { Field } from "@/components/mypage/ob/components/form/Field";
import { Section } from "@/components/mypage/ob/components/form/Section";
import { durations } from "@/components/mypage/ob/constants";
import type { ObMentoringFormState, ObMentoringPresenterProps } from "@/components/mypage/ob/types";

type MentoringMethodSectionProps = Pick<
  ObMentoringPresenterProps,
  "form" | "updateField" | "handleProgressWayToggle"
>;

export function MentoringMethodSection({
  form,
  updateField,
  handleProgressWayToggle,
}: MentoringMethodSectionProps) {
  return (
    <Section title="멘토링 방식" icon={Clock3}>
      <Field label="인원">
        <SegmentedControl
          options={["1:1", "1:N"]}
          value={form.meetingType}
          onChange={(value) =>
            updateField("meetingType", value as ObMentoringFormState["meetingType"])
          }
        />
      </Field>
      <Field label="진행 방식">
        <SegmentedControl
          options={["채팅", "화상회의", "대면"]}
          value={form.progressWays}
          onChange={handleProgressWayToggle}
        />
        <p className="mt-2 text-xs text-[#8d92a3]">* 중복 선택 가능</p>
      </Field>
      <Field label="1회당 소요 시간">
        <Select
          value={form.duration}
          placeholder="시간 선택"
          options={durations}
          onChange={(value) => updateField("duration", value)}
        />
        <p className="mt-2 text-xs text-[#8d92a3]">* 10분 단위로 진행가능합니다.</p>
      </Field>
    </Section>
  );
}
