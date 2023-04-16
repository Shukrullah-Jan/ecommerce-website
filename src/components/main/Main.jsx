import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

import { useTheme } from "../../contexts/themeContext";
import Hero from "../hero/Hero";
import NewArrivals from "../new-arrivals/NewArrivals";
import FeaturedProducts from "../featured-products/FeaturedProducts";
import Footer from "../footer/Footer";
import ContactUs from "../contact-us/ContactUs";
import CookieModal from "../mini-components/CookieModal";
import "./main.scss";

const Main = ({ linkClicked }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    // if sidebar linked were clicked then scroll to the right position on the page
    if (linkClicked === "contactUs") {
      document.querySelector("#contactUs").scrollIntoView();
    } else if (linkClicked === "aboutUs") {
      document.querySelector("#aboutUs").scrollIntoView();
    } else {
      window.scrollTo(0, 0); // Scroll to top when component mounts or updates
    }
  }, [linkClicked]);

  function handleSignUpNewsletter() {
    console.log(
      "Thanks for signing to our newsletter\nWe will send you weekly mails"
    );
  }

  // check cookie
  let checkCookie = document.cookie.indexOf("testCookie=working");

  return (
    <div className={theme == "light" ? "main light" : "main dark"}>
      {checkCookie == -1 && <CookieModal />}
      <Hero />
      <NewArrivals />
      <section className="call-to-action__banner">
        <div className="banner">
          <h2>{t("sixty_percent_off")}</h2>
          <p>{t("weekly_deals")}</p>
        </div>
      </section>
      <FeaturedProducts />
      <section className="newsletter">
        <div className="banner">
          <Typography variant="h5" className="newsletter__heading">
            {t("sign_newsletter")}
          </Typography>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="newletter"
          />
          <button
            className="basic-btn"
            onClick={() => {
              handleSignUpNewsletter();
            }}
          >
            {t("sign_up")}
          </button>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Main;
