import { useEffect, useRef } from "react";

interface useOutsideProps {
  onCloseToggle: () => void;
  // eslint-disable-next-line no-unused-vars
  callback?: (target: Element) => boolean;
}

export default function useOutside<T extends Element>({
  onCloseToggle,
  callback,
}: useOutsideProps) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (callback && callback(target)) return;
      if (ref.current && !ref.current.contains(target)) onCloseToggle();
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [callback, onCloseToggle]);

  return ref;
}
