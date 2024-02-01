import { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const GoogleTranslate = () => {
  const [selected, setSelected] = useState("/auto/en");

  useEffect(() => {
    loadGoogleTranslateScript();

    if (hasCookie("googtrans")) {
      setSelected(getCookie("googtrans"));
    }
  }, []);

  const loadGoogleTranslateScript = () => {
    if (typeof window !== "undefined") {
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
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
          includedLanguages: "en,pl,no,de",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    }
  };

  const langChange = (e) => {
    setCookie("googtrans", decodeURI(e));
    setSelected(e);
    changeGoogleTranslateLanguage(e);
  };

  const changeGoogleTranslateLanguage = (language) => {
    if (typeof window !== "undefined") {
      const translateElement = new window.google.translate.TranslateElement({
        pageLanguage: "auto",
        includedLanguages: language.substring(language.lastIndexOf("/") + 1),
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      });

      translateElement.translatePage();
    }
  };

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          width: "0px",
          height: "0px",
          position: "absolute",
        }}
      ></div>
      <select
        className="notranslate"
        value={selected}
        onChange={(e) => langChange(e.target.value)}
      >
        {/* Остальной код остается без изменений */}
      </select>
    </>
  );
};

export default GoogleTranslate;
