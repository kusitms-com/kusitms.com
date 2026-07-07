import { AlertTriangle, Check, Info } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type ToastType = "success" | "warning" | "error" | "info";

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

  const toastIcon = toast ? TOAST_ICON[toast.type] : null;

  const Toast = toast ? (
    <div
      aria-live="polite"
      className="fixed left-1/2 bottom-6 z-50 flex h-12 min-w-[201px] -translate-x-1/2 items-center gap-2.5 rounded-full bg-[#9EA4AD] px-5 text-body-8 font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.14)] desktop:text-body-6"
    >
      <span
        className={[
          "flex size-5 shrink-0 items-center justify-center rounded-full text-white",
          toastIcon?.className,
        ].join(" ")}
      >
        {toastIcon?.icon}
      </span>
      <span>{toast.message}</span>
    </div>
  ) : null;

  return { showToast, Toast };
}

const TOAST_ICON: Record<ToastType, { className: string; icon: React.ReactNode }> = {
  success: {
    className: "bg-[#00C851]",
    icon: <Check className="size-3.5 stroke-[3]" aria-hidden="true" />,
  },
  warning: {
    className: "bg-[#FF9F1A]",
    icon: (
      <AlertTriangle
        className="size-3.5 fill-white stroke-[#FF9F1A] stroke-[2.5]"
        aria-hidden="true"
      />
    ),
  },
  error: {
    className: "bg-[#FF3B30]",
    icon: <Info className="size-3.5 fill-white stroke-[#FF3B30] stroke-[2.5]" aria-hidden="true" />,
  },
  info: {
    className: "bg-[#3366FF]",
    icon: <Info className="size-3.5 fill-white stroke-[#3366FF] stroke-[2.5]" aria-hidden="true" />,
  },
};
