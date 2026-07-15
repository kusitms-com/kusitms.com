import type { LucideIcon } from "lucide-react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import type { FieldPath, FieldPathValue } from "react-hook-form";

export type ObMentoringFormState = {
  exposureEnabled: boolean;
  oneLineIntro: string;
  careerSummary: string;
  jobType: string;
  profileFile: string;
  meetupProject: string;
  meetupProjectPublic: boolean;
  companyName: string;
  companyPrivate: boolean;
  companyType: string;
  companyDomain: string;
  currentTeam: string;
  mentoringTitle: string;
  mentoringDescription: string;
  meetingType: "1:1" | "1:N";
  progressWays: string[];
  duration: string;
};

export type ObMentoringFormErrors = Partial<Record<keyof ObMentoringFormState, string>>;

export type UseObMentoringFormReturn = {
  form: ObMentoringFormState;
  errors: ObMentoringFormErrors;
  modalVisible: boolean;
  toastVisible: boolean;
  isCompleted: boolean;
  updateField: <Key extends FieldPath<ObMentoringFormState>>(
    field: Key,
    value: FieldPathValue<ObMentoringFormState, Key>,
  ) => void;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleProgressWayToggle: (value: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleCloseModal: () => void;
  handleConfirmModal: () => void;
};

export type ObMentoringPresenterProps = UseObMentoringFormReturn;

export type SideNavItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

export type SectionProps = {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
};
