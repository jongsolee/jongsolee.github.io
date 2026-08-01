"use client";

import { useEffect } from "react";

export default function DocumentLanguage({ language }: { language: "ko" | "en" }) {
  useEffect(() => {
    const previousLanguage = document.documentElement.lang;
    document.documentElement.lang = language;

    return () => {
      document.documentElement.lang = previousLanguage || "ko";
    };
  }, [language]);

  return null;
}
