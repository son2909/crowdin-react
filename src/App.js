import logo from "./logo.svg";
import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEN from "./i18n/locales/en/translation.json";
import translationVN from "./i18n/locales/vi/translation.json";
import { useState } from "react";
// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    // fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  const { t, i18n } = useTranslation();

  const setLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("Edit")}
          <code>{t("src/App.js")}</code> {t("and save to reload.")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Welcome to React")}
        </a>
        <p>
          {t(
            "These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English. The Bible, for example, is a translation. But they are all well known in English today, and many of them express beautiful thoughts."
          )}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
          }}
        >
          <button onClick={() => setLang("vi")}>Viet Nam</button>
          <button onClick={() => setLang("en")}>English</button>
        </div>
      </header>
    </div>
  );
}

export default App;
