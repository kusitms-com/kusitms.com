import { type ChangeEvent, useState } from "react";
import {
  type FieldErrors,
  type FieldPath,
  type FieldPathValue,
  type Resolver,
  useForm,
} from "react-hook-form";
import { initialForm } from "@/components/mypage/ob/constants";
import type { ObMentoringFormState, UseObMentoringFormReturn } from "@/components/mypage/ob/types";

const REQUIRED_FIELD_MESSAGE = "해당 필드를 채워주세요";
const REQUIRED_FIELD_ORDER = [
  "oneLineIntro",
  "careerSummary",
  "jobType",
  "profileFile",
  "mentoringTitle",
  "mentoringDescription",
] satisfies (keyof ObMentoringFormState)[];

function focusFirstInvalidField(errors: FieldErrors<ObMentoringFormState>) {
  const firstInvalidField = REQUIRED_FIELD_ORDER.find((field) => errors[field]);

  if (!firstInvalidField) {
    return;
  }

  window.requestAnimationFrame(() => {
    const fieldElement = document.querySelector<HTMLElement>(
      `[data-ob-field="${firstInvalidField}"]`,
    );

    fieldElement?.scrollIntoView({ behavior: "smooth", block: "center" });

    const focusableElement = fieldElement?.querySelector<HTMLElement>(
      "textarea, input:not([type='file']), button, [tabindex]:not([tabindex='-1'])",
    );

    focusableElement?.focus({ preventScroll: true });
  });
}

const obMentoringFormResolver: Resolver<ObMentoringFormState> = (values) => {
  const errors: FieldErrors<ObMentoringFormState> = {};

  if (!values.oneLineIntro.trim()) {
    errors.oneLineIntro = { type: "required", message: REQUIRED_FIELD_MESSAGE };
  }
  if (!values.careerSummary.trim()) {
    errors.careerSummary = { type: "required", message: REQUIRED_FIELD_MESSAGE };
  }
  if (!values.jobType) {
    errors.jobType = { type: "required", message: REQUIRED_FIELD_MESSAGE };
  }
  if (!values.profileFile) {
    errors.profileFile = { type: "required", message: REQUIRED_FIELD_MESSAGE };
  }
  if (!values.mentoringTitle.trim()) {
    errors.mentoringTitle = { type: "required", message: REQUIRED_FIELD_MESSAGE };
  }
  if (!values.mentoringDescription.trim()) {
    errors.mentoringDescription = { type: "required", message: REQUIRED_FIELD_MESSAGE };
  }

  return {
    values: Object.keys(errors).length > 0 ? {} : values,
    errors,
  };
};

export function useObMentoringForm(): UseObMentoringFormReturn {
  const [modalVisible, setModalVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const {
    clearErrors,
    formState: { errors: formErrors },
    getValues,
    handleSubmit: submitForm,
    setValue,
    watch,
  } = useForm<ObMentoringFormState>({
    defaultValues: initialForm,
    resolver: obMentoringFormResolver,
  });
  const form = watch();

  const isCompleted = Boolean(
    form.oneLineIntro.trim() &&
      form.careerSummary.trim() &&
      form.jobType &&
      form.profileFile &&
      form.mentoringTitle.trim() &&
      form.mentoringDescription.trim() &&
      form.duration,
  );

  const updateField = <Key extends FieldPath<ObMentoringFormState>>(
    field: Key,
    value: FieldPathValue<ObMentoringFormState, Key>,
  ) => {
    setValue(field, value, { shouldDirty: true });
    clearErrors(field);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileName = event.target.files?.[0]?.name;

    if (fileName) {
      updateField("profileFile", fileName);
    }
  };

  const handleProgressWayToggle = (value: string) => {
    const currentProgressWays = getValues("progressWays");
    const progressWays = currentProgressWays.includes(value)
      ? currentProgressWays.filter((item) => item !== value)
      : [...currentProgressWays, value];

    setValue("progressWays", progressWays, { shouldDirty: true });
  };

  const handleSubmit = submitForm(
    () => {
      setModalVisible(true);
    },
    (invalidErrors) => {
      focusFirstInvalidField(invalidErrors);
    },
  );

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirmModal = () => {
    setModalVisible(false);
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2200);
  };

  return {
    form,
    errors: {
      oneLineIntro: formErrors.oneLineIntro?.message,
      careerSummary: formErrors.careerSummary?.message,
      jobType: formErrors.jobType?.message,
      profileFile: formErrors.profileFile?.message,
      mentoringTitle: formErrors.mentoringTitle?.message,
      mentoringDescription: formErrors.mentoringDescription?.message,
    },
    modalVisible,
    toastVisible,
    isCompleted,
    updateField,
    handleFileChange,
    handleProgressWayToggle,
    handleSubmit,
    handleCloseModal,
    handleConfirmModal,
  };
}
