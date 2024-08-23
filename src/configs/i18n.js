import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { get } from "./localstorage.service";
import { arTranslations, enTranslations } from "../translations";

const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: get("lang") || "en", // default language
  interpolation: {
    escapeValue: false, // react already does escaping
  },
  react: {
    useSuspense: false, // Set to false if you are not using suspense
  },
});

export default i18n;
