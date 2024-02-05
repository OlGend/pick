"use client";
import { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const GoogleTranslate = () => {
  const languages = [
    { label: "English", value: "/auto/en", flag: "🌍" },
    { label: "Polski", value: "/auto/pl", flag: "🇵🇱" },
    { label: "Български", value: "/auto/bg", flag: "🇧🇬" },
    { label: "Čeština", value: "/auto/cs", flag: "🇨🇿" },
    { label: "Deutsch", value: "/auto/de", flag: "🇩🇪" },
    { label: "Dansk", value: "/auto/da", flag: "🇩🇰" },
    { label: "Español", value: "/auto/es", flag: "🇪🇸" },
    { label: "Suomi", value: "/auto/fi", flag: "🇫🇮" },
    { label: "Français", value: "/auto/fr", flag: "🇫🇷" },
    { label: "Ελληνικά", value: "/auto/el", flag: "🇬🇷" },
    { label: "Magyar", value: "/auto/hu", flag: "🇭🇺" },
    { label: "Italiano", value: "/auto/it", flag: "🇮🇹" },
    { label: "Nederlands", value: "/auto/nl", flag: "🇳🇱" },
    { label: "Norsk", value: "/auto/no", flag: "🇳🇴" },
    { label: "Português", value: "/auto/pt", flag: "🇵🇹" },
    { label: "Svenska", value: "/auto/sv", flag: "🇸🇪" },
    { label: "Slovenčina", value: "/auto/sk", flag: "🇸🇰" },
    { label: "Türkçe", value: "/auto/tr", flag: "🇹🇷" },
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
      addScript.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
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
          includedLanguages:
            "en,bg,cs,de,da,es,fi,fr,el,hu,it,nl,no,pt,sv,sk,tr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    }
  };

  const langChange = (e) => {
    setCookie("googtrans", decodeURI(e));
    setSelected(e);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <>
      {typeof window !== "undefined" && (
        <div
          id="google_translate_element"
          style={{
            width: "0px",
            height: "0px",
          }}
        ></div>
      )}
      <div className={`language-switcher ml-3 flex flex-col`}>
      <p className="headerText">Website language</p>
        <select
          className="notranslate"
          value={selected}
          onChange={(e) => langChange(e.target.value)}
        >
          {languages.map((lang) => (
            <option
              style={{ fontSize: "20px" }}
              className="notranslate"
              key={lang.value}
              value={lang.value}
            >
              {lang.flag} {lang.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default GoogleTranslate;
