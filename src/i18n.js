import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      es: {
        translation: {
          About: "Acerca",
          Services: "Servicios",
          Contact: "Contacto",
          Spanish: "Español",
          English: "Inglés",
          Korean: "Coreano",
        },
      },
      en: {
        translation: {
          About: "About",
          Services: "Services",
          Contact: "Contact",
          Spanish: "Spanish",
          English: "English",
          Korean: "Korean",
        },
      },
      kr: {
        About: "에 대한",
        Services: "서비스",
        Contact: "연락하다",
        Spanish: "스페인의",
        English: "영어",
        Korean: "한국인",
      },
    },
  });
