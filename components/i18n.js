// i18n.js
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";



// export default i18n;
async function initializeI18n() {
  let defLng;

  // Получаем данные о стране с API
  try {
    const response = await fetch(
      "https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW"
    );
    const data = await response.json();
    if (typeof window !== "undefined") {
      localStorage.setItem("country", data.country);
    }
    defLng = data.country.toLowerCase();
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    defLng = "en"; // В случае ошибки устанавливаем язык по умолчанию
  }

  // Инициализируем i18n
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: "au",
      interpolation: {
        escapeValue: false,
      },
    });
}

initializeI18n();

export default i18n;
