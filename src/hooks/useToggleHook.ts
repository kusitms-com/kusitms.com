import { useState } from "react";

const useToggleHook = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleState = () => {
    setIsOpen((prev) => !prev);
  };

  const changecloseState = () => {
    setIsOpen(false);
  };

  const changeopenState = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    toggleState,
    changecloseState,
    changeopenState,
  };
};

export default useToggleHook;
