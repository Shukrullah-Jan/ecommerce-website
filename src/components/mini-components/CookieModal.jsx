import React from "react";

import { useTheme } from "../../contexts/themeContext";
import CookieImg from "../../files/images/cookie-image.png";

import "./styles.scss";
const CookieModal = () => {
  const { theme } = useTheme();

  function handleAcceptCookies() {
    const cookieModal = document.querySelector(".cookie-cont");

    const checkCookie = document.cookie.indexOf("textCookie=working");

    if (checkCookie < 0) {
      // if the cookie doesnt exist
      // set a cookie and expire it 10 minutes
      var d = new Date();
      var expTime = d.setTime(d.getTime() + 10 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      console.log(d.toUTCString());

      document.cookie = "testCookie=working;" + expires + ";path=/";

      // this cookie expires on the specified date
      //   document.cookie =
      //     "user=Shukrullah Askari; expires=Tue, 11 Apr 2023 08:39:59 GMT; path=/";
      cookieModal.classList.add("hidden");
    } else {
      alert("Cookie can't be set");
    }
  }

  function handleCloseModal() {
    const cookieModal = document.querySelector(".cookie-cont");

    cookieModal.className = "hidden";
  }

  return (
    <div
      className={theme == "light" ? "cookie-cont light" : "cookie-cont dark"}
    >
      <img src={CookieImg} alt="Cookie image" />

      <div className="cookie-content">
        <p className="text">
          Our application needs cookies to provide better user experience, as
          well as for optimization purposes. <a href="#">Cookies policy</a>
        </p>
        <div className="modal-buttons">
          <button className="accept-cookies-btn" onClick={handleAcceptCookies}>
            Accept cookies
          </button>
          <button className="close-btn" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
