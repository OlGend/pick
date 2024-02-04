"use client";
import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const GoogleTranslate = () => {
  const languages = [
    { label: "English", value: "/auto/en" },
    { label: "Polski", value: "/auto/pl" },
  ];

  const [selected, setSelected] = useState("/auto/en");

  useEffect(() => {
    loadGoogleTranslateScript();

    if (hasCookie("googtrans")) {
      setSelected(getCookie("googtrans"));
    }
  }, []);

  const loadGoogleTranslateScript = () => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    
  };

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "en,pl",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  const langChange = (e) => {
    setCookie("googtrans", decodeURI(e));
    setSelected(e);
    window.location.reload();
    // changeGoogleTranslateLanguage(e);
  };

  // const changeGoogleTranslateLanguage = (language) => {
  //   const translateElement = window.google.translate.TranslateElement({
  //     pageLanguage: "auto",
  //     includedLanguages: language.substring(language.lastIndexOf("/") + 1),
  //     layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
  //   });

  //   translateElement.translatePage();
  // };

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