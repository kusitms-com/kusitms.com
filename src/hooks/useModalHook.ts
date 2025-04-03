import { useEffect, useState } from "react";

const useHandleModalClick = (handleModalClose: () => void) => {
  useEffect(() => {
    // ESC keydown => Modal Close
    const handleKeyDownEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    document.addEventListener("keydown", handleKeyDownEsc);

    return () => {
      document.removeEventListener("keydown", handleKeyDownEsc);
    };
  }, [handleModalClose]);
};

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  useHandleModalClick(handleModalClose);

  return {
    openModal,

    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
