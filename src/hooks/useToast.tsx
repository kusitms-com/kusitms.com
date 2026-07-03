import { useCallback, useEffect, useState } from "react";

type ToastType = "success" | "error";

type ToastState = {
  message: string;
  type: ToastType;
};

type ShowToastOptions = {
  message: string;
  type?: ToastType;
};

export function useToast(duration = 3000) {
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    if (!toast) return;

    const timer = window.setTimeout(() => {
      setToast(null);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, toast]);

  const showToast = useCallback(({ message, type = "success" }: ShowToastOptions) => {
    setToast({ message, type });
  }, []);

  const Toast = toast ? (
    <div
      aria-live="polite"
      className={[
        "fixed left-1/2 bottom-6 z-50 flex -translate-x-1/2 items-center rounded-[8px] px-5 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.16)]",
        "text-body-8 desktop:text-body-6 text-white",
        toast.type === "success" ? "bg-dark-blue-500" : "bg-red-500",
      ].join(" ")}
    >
      {toast.message}
    </div>
  ) : null;

  return { showToast, Toast };
}
