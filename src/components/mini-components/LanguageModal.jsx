import React, { useEffect } from "react";

// I18next imports
import { useTranslation } from "react-i18next";
import i18next from "i18next";
// for flag icons I used the sdn link in html file
// import "/node_modules/flag-icons/css/flag-icons.min.css"; // a css library for flags of countries"

// js cookie for manipulation cookies in react app
import cookies from "js-cookie";

import { useTheme } from "../../contexts/themeContext";
import "./styles.scss";
const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
];

const LanguageModal = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const selectedLangCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === selectedLangCode);

  useEffect(() => {
    const sidebar = document.querySelector(".nav__sidebar");
    const modal = document.querySelector(".lang-modal");

    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");

    if (document.body.dir == "rtl") {
      modal.style.left = "5.2rem";
      modal.style.right = "auto";
      
    } else {
      modal.style.left = "auto";
      modal.style.right = "5.2rem";

      sidebar.style.left = "0";
      sidebar.style.right = "0";
    }
  }, [currentLanguage]);

  document.addEventListener("click", () => {
    const sidebar = document.querySelector(".nav__sidebar");
    const modal = document.querySelector(".lang-modal");

    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }

    if (sidebar.style.display == "block") {
      sidebar.style.display = "none";
    }
  });

  return (
    <div
      className={
        theme === "light" ? "lang-modal light hidden" : "lang-modal dark hidden"
      }
    >
      <div className="language-list">
        <h4 className="lang-name">{t("language")}</h4>

        {languages.map((lang) => {
          return (
            <div key={lang.code} className="header__langs">
              <span
                className={`fi fi-${lang.country_code}`}
                style={{ opacity: lang.code == selectedLangCode ? 0.5 : 1 }}
              ></span>
              <button
                onClick={() => i18next.changeLanguage(lang.code)}
                className={lang.code == selectedLangCode ? "disabled" : ""}
              >
                {lang.name}
              </button>
            </div>
          );
        })}
      </div>
      {/* <div className="content">
        <h2>{t("welcome_message")}</h2>

        <p>{t("days_since_release", { number_of_days })}</p> */}
      {/* you can assign a diff value fo num_of_days, like below */}
      {/* <p>{t("days_since_release", { number_of_days: 10 })}</p> */}
      {/* </div> */}
    </div>
  );
};

export default LanguageModal;
