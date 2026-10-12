import { SaveSuccessModal } from "@/components/mypage/ob/components/feedback/SaveSuccessModal";
import { FormActions } from "@/components/mypage/ob/components/form/FormActions";
import { MyPageHeader } from "@/components/mypage/ob/components/layout/MyPageHeader";
import { ProfileSummary } from "@/components/mypage/ob/components/layout/ProfileSummary";
import { SideNav } from "@/components/mypage/ob/components/layout/SideNav";
import { VisibilityPanel } from "@/components/mypage/ob/components/layout/VisibilityPanel";
import { BasicInfoSection } from "@/components/mypage/ob/components/sections/BasicInfoSection";
import { MentoringIntroSection } from "@/components/mypage/ob/components/sections/MentoringIntroSection";
import { MentoringMethodSection } from "@/components/mypage/ob/components/sections/MentoringMethodSection";
import type { ObMentoringPresenterProps } from "@/components/mypage/ob/types";
import { SuccessToast } from "@/components/shared/ui/SuccessToast";

export function ObMentoringPresenter({
  form,
  errors,
  modalVisible,
  toastVisible,
  isCompleted,
  updateField,
  handleFileChange,
  handleProgressWayToggle,
  handleSubmit,
  handleCloseModal,
  handleConfirmModal,
}: ObMentoringPresenterProps) {
  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-pretendard)] text-[#151519]">
      <MyPageHeader />
      <div className="mx-auto flex w-full max-w-[1200px] gap-6 px-5 desktop:px-0">
        <SideNav />
        <form onSubmit={handleSubmit} className="min-w-0 flex-1 space-y-5 py-8">
          <ProfileSummary />
          <VisibilityPanel
            enabled={form.exposureEnabled}
            onChange={() => updateField("exposureEnabled", !form.exposureEnabled)}
          />
          <BasicInfoSection
            form={form}
            errors={errors}
            updateField={updateField}
            handleFileChange={handleFileChange}
          />
          <MentoringIntroSection form={form} errors={errors} updateField={updateField} />
          <MentoringMethodSection
            form={form}
            updateField={updateField}
            handleProgressWayToggle={handleProgressWayToggle}
          />
          <FormActions isCompleted={isCompleted} />
        </form>
      </div>
      {modalVisible && (
        <SaveSuccessModal onClose={handleCloseModal} onConfirm={handleConfirmModal} />
      )}
      {toastVisible && <SuccessToast />}
    </main>
  );
}
