"use client";

import { Button } from "@kusitms.com/ui";

interface LinkButtonProps {
  title?: string;
  link?: string;
  className?: string;
}

const LinkButton = ({ title, link, className }: LinkButtonProps) => {
  return (
    <Button
      variant="websiteCta"
      onClick={() => {
        if (!link) return;
        window.open(link, "_blank");
      }}
      className={className}
    >
      {title}
    </Button>
  );
};

export default LinkButton;
