import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/themeContext";
import "./hero.scss";

const Hero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <div className={theme === "dark" ? "hero dark" : "hero light"}>
      <div className="hero__content">
        <h1>{t("find_choice_here")}</h1>
        <p>{t("long_text")}</p>
      </div>

      <div className="hero__action-button">
        <button>{t("buy_now")}</button>
      </div>
    </div>
  );
};

export default Hero;
