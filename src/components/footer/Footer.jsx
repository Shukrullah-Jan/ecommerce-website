import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import { useTheme } from "../../contexts/themeContext";

import "./footer.scss";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <footer className={theme === "dark" ? "dark" : "light"}>
      <section id="aboutUs">
        <Typography variant="h4" className="footer-titles">
         {t("about_us")}
        </Typography>
        <div className="footer__details">
          <section className="contact">
            <h3>Contact</h3>

            <div className="contact-info">
              <p>
                <b>Address</b>: French bakery street, Quetta, Baluchistan
              </p>
              <p>
                <b>Phone</b>: +923403243303 / +923340302333
              </p>
              <p>
                <b>Hours</b>: 8:00AM - 6:00PM, Mon - Sat
              </p>
            </div>

            <div className="contact-social-links">
              <h3>Follow us</h3>
              <AiFillInstagram className="contact-social-links__icons" />
              <AiFillFacebook className="contact-social-links__icons" />
              <AiFillTwitterSquare className="contact-social-links__icons" />
              <AiFillGithub className="contact-social-links__icons" />
            </div>
          </section>

          <section className="footer__about">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Delivery Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </section>
          <section className="footer__my-account">
            <h3>My Account</h3>
            <ul>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">View Cart</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
              <li>
                <a href="#">Track My Order</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </section>
          <section className="footer__install-apps">
            <h3>Install App</h3>
            <h5>From AppStore or Goole Play</h5>
            <div className="apps"></div>
            <h5>Secured Payment Gateways</h5>
          </section>
        </div>
      </section>

      <p className="copyright">Copyright 2023, Nurband E-commerce website. </p>
    </footer>
  );
};

export default Footer;
