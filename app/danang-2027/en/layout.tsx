import type { ReactNode } from "react";
import DocumentLanguage from "../_components/DocumentLanguage";

export default function EnglishTripLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DocumentLanguage language="en" />
      {children}
    </>
  );
}
