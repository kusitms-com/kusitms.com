"use client";

import { EmailInput } from "@kusitms.com/ui";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { postEmail } from "@/service/recruit/postEmail";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 시안 KUS_RCT_004_1~5의 안내 문구. 서버 응답에 "이미"가 들어 있으면 중복 신청으로 본다
type Status = "idle" | "submitting" | "success" | "duplicate" | "invalid" | "error";

const PRIVACY_ROWS = [
  ["수집 항목", "이메일"],
  ["수집 목적", "다음 기수 모집 안내 메일 발송"],
  ["보유 기간", "신청일부터 다음 기수 학회원 서류 접수 마감일까지, 이후 파기"],
  ["동의 거부", "동의하지 않을 수 있으며, 이 경우 모집 알림을 받을 수 없어요"],
] as const;

function PrivacyModal({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const confirmRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // 열 때 "확인"에 포커스, 닫으면 연 버튼으로 포커스를 돌려준다
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    confirmRef.current?.focus();
    // 모달이 열려 있는 동안 뒤 화면 스크롤 고정(KUS_RCT_003)
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, []);

  // Esc로 닫고, Tab/Shift+Tab은 모달 안에서만 돈다
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusables = [
        ...dialogRef.current.querySelectorAll<HTMLElement>(
          "button, [href], [tabindex]:not([tabindex='-1'])",
        ),
      ];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      const inside = dialogRef.current.contains(document.activeElement);
      if (event.shiftKey && (document.activeElement === first || !inside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !inside)) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // body에 그려야 페이지 래퍼(min-w 등)와 상관없이 화면 기준으로 가운데 놓인다
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
      {/* Dim(배경) 클릭으로도 닫힌다(KUS_RCT_003). 키보드는 Esc·확인 버튼으로 닫으므로 탭 순서에서 뺀다 */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="개인정보 안내 닫기"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex w-full max-w-[490px] flex-col gap-4 rounded-lg bg-white p-5"
      >
        <h3 id={titleId} className="text-[20px] leading-[30px] font-bold text-label-normal">
          개인정보 수집·이용 안내
        </h3>
        <dl className="flex flex-col gap-3.5 pb-3.5 text-[14px] leading-5 tracking-[0.0125em]">
          {PRIVACY_ROWS.map(([term, detail]) => (
            <div key={term} className="flex gap-5">
              <dt className="shrink-0 font-bold text-label-normal">{term}</dt>
              <dd className="font-medium text-label-light">{detail}</dd>
            </div>
          ))}
        </dl>
        <button
          ref={confirmRef}
          type="button"
          onClick={onClose}
          className="h-12 w-full cursor-pointer rounded-lg bg-fill-primary text-[16px] font-semibold text-brand-primary"
        >
          확인
        </button>
      </div>
    </div>,
    document.body,
  );
}

const MailInput = () => {
  const checkboxId = useId();
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [showPrivacy, setShowPrivacy] = useState(false);

  const isValidEmail = EMAIL_PATTERN.test(email);
  // 서버가 형식 오류(400)로 돌려준 경우도 형식 오류로 보여 준다
  const formatError = (touched && email.length > 0 && !isValidEmail) || status === "invalid";
  const agreeError = touched && isValidEmail && !agreed;

  const helper = formatError
    ? { text: "이메일 형식을 확인해 주세요", tone: "error" }
    : agreeError
      ? { text: "개인정보 수집·이용에 동의해 주세요", tone: "error" }
      : status === "success"
        ? { text: "신청 완료! 모집이 시작되면 메일로 알려드릴게요", tone: "info" }
        : status === "duplicate"
          ? { text: "이미 알림을 신청한 이메일이에요", tone: "error" }
          : status === "error"
            ? { text: "잠시 후 다시 시도해 주세요", tone: "error" }
            : null;
  // 시안(KUS_RCT_004): 형식·동의·중복 오류는 입력창 테두리도 빨갛게, 서버 오류는 문구만
  const redBorder = formatError || agreeError || status === "duplicate";

  const handleChange = (value: string) => {
    setEmail(value);
    if (status !== "submitting") setStatus("idle");
  };

  const handleSubmit = async (value: string) => {
    setStatus("submitting");
    try {
      await postEmail(value);
      setStatus("success");
      // 신청 완료 시 입력창을 비운다(입력값 변경으로 상태가 초기화되지 않게 직접 비움)
      setEmail("");
      setTouched(false);
    } catch (error) {
      // 백엔드는 누락·형식 오류·중복을 모두 400으로 주고 message로 구분한다. 서버 오류는 입력값을 유지한다
      const message = error instanceof Error ? error.message : "";
      if (message.includes("이미 등록된")) setStatus("duplicate");
      else if (message.includes("형식") || message.includes("필수")) setStatus("invalid");
      else setStatus("error");
    }
  };

  return (
    <div className="flex w-full max-w-[295px] flex-col items-center desktop:max-w-[652px]">
      <EmailInput
        value={email}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        // biome-ignore lint/suspicious/noExplicitAny: DS EmailInput의 onSubmit이 InputHTMLAttributes와 교차 타입 충돌
        onSubmit={handleSubmit as any}
        validate={(value) =>
          EMAIL_PATTERN.test(value) && agreed && (status === "idle" || status === "error")
        }
        placeholder="이메일 주소를 입력해 주세요"
        buttonLabel="알림 받기"
        aria-invalid={redBorder}
        aria-describedby={helper ? `${checkboxId}-helper` : undefined}
        className={cn("min-w-0 border border-transparent", redBorder && "border-status-negative")}
      />
      <p
        id={`${checkboxId}-helper`}
        aria-live="polite"
        className={cn(
          "h-[26px] w-full px-[18px] pt-0.5 text-[12px] leading-6 desktop:h-[33px] desktop:px-[22px] desktop:pt-[7px] desktop:text-[18px] desktop:leading-[26px]",
          helper?.tone === "error" ? "text-status-negative" : "text-label-normal",
        )}
      >
        {helper?.text}
      </p>
      <div className="flex flex-col items-center gap-1 pt-6 desktop:flex-row desktop:gap-2 desktop:pt-10">
        <label htmlFor={checkboxId} className="flex cursor-pointer items-center gap-2">
          <input
            id={checkboxId}
            type="checkbox"
            checked={agreed}
            onChange={(event) => {
              setAgreed(event.target.checked);
              setTouched(true);
            }}
            className="size-5 cursor-pointer rounded-[4px] accent-brand-primary desktop:size-[25px]"
          />
          <span className="text-label-14m text-label-normal desktop:text-[18px] desktop:leading-[26px] desktop:tracking-[-0.005em]">
            [필수] 개인정보 수집·이용에 동의합니다
          </span>
        </label>
        <button
          type="button"
          onClick={() => setShowPrivacy(true)}
          className="cursor-pointer text-[12px] leading-[18px] text-label-assitive underline desktop:text-[18px] desktop:leading-[26px]"
        >
          자세히 보기
        </button>
      </div>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </div>
  );
};

export default MailInput;
