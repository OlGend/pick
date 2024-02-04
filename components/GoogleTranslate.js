"use client";
import { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const GoogleTranslate = () => {
  const languages = [
    { label: "English", value: "/auto/en" },
    { label: "Polski", value: "/auto/pl" },
  ];

  const [selected, setSelected] = useState("/auto/en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      loadGoogleTranslateScript();

      if (hasCookie("googtrans")) {
        setSelected(getCookie("googtrans"));
      }
    }
  }, []);

  const loadGoogleTranslateScript = () => {
    if (typeof window !== "undefined") {
      const addScript = document.createElement("script");
      addScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.async = true;
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  };

  const googleTranslateElementInit = () => {
    if (typeof window !== "undefined") {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "auto",
          autoDisplay: false,
          includedLanguages: "en,pl",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    }
  };

  const langChange = (e) => {
    setCookie("googtrans", decodeURI(e));
    setSelected(e);
    window.location.reload();
  };

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          width: "300px",
          height: "300px",
        }}
      ></div>

      <select
        className="notranslate"
        value={selected}
        onChange={(e) => langChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option className="notranslate" key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default GoogleTranslate;
