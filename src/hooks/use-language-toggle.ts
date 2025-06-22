"use client";

import { useState, useEffect } from "react";

export function useLanguageToggle() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    // TODO: Add i18n language change logic here
  };

  return { language, toggleLanguage };
}
