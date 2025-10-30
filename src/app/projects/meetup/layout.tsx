import { ReactNode } from "react";

interface MeetupLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function MeetupLayout({ children, modal }: MeetupLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
