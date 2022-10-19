import logo from "./logo.svg";
import "./App.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEN from "./i18n/locales/en/translation.json";
// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  // de: {
  //   translation: translationDE,
  // },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

function App() {
  const { t } = useTranslation();

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
          {t("Wellcome to my ReactJs")}
        </a>
      </header>
    </div>
  );
}

export default App;
