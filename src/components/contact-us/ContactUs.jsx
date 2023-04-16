import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";

import "./contactUs.scss";

const ContactUs = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleFormData(e) {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contactUs" className={theme === "dark" ? "dark" : "light"}>
      <Typography variant="h4" className="footer-titles">
        {t("contact_us")}
      </Typography>

      <div className="contact-form">
        <form action="" onSubmit={handleFormSubmission}>
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              handleFormData(e);
            }}
            placeholder={t("name")}
          />

          <label htmlFor="email">{t("email")}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            onChange={(e) => {
              handleFormData(e);
            }}
          />

          <label htmlFor="name">{t("message")}</label>
          <textarea
            id="message"
            name="message"
            placeholder={t("message")}
            onChange={(e) => {
              handleFormData(e);
            }}
          />

          <button>{t("send")}</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
