import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next"; // for translation

import ReactSwitch from "react-switch";
import { BsFillCartPlusFill } from "react-icons/bs";
import { TbLanguage } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { useTheme } from "../../contexts/themeContext";
import { searchedProductActions } from "../../features/searchedProductSlice/searchedProductSlice";
import LanguageModal from "../mini-components/LanguageModal";

import "./navbar.scss";
import { dir } from "i18next";

export default function Navbar({ handleLinkClick, setLinkClick }) {
  const [searchedProduct, setSearchedProduct] = useState("");
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // check current url
  const currentUrl = window.location.href;

  function handleInputChange(e) {
    const { value } = e.target;

    setSearchedProduct(value);
  }

  function handleSearch() {
    if (searchedProduct.length === 0) {
      window.alert("Please type name of product to search");
      return;
    }
    dispatch(searchedProductActions.searchProduct(searchedProduct));
    navigate("/searchedProduct");
  }

  function handleMenuClick(e) {
    e.stopPropagation();
    document.querySelector(".nav__sidebar").style.display = "block";
  }

  function handleSidebarClose() {
    document.querySelector(".lang-modal").classList.add("hidden");
    document.querySelector(".nav__sidebar").style.display = "none";
  }

  function toggleLangModal(e) {
    e.stopPropagation();
    const modal = document.querySelector(".lang-modal");

    const langDirection = document.body.dir;

    if (langDirection === "rtl" && window.innerWidth < 993) {
      modal.style.right = "5rem";
    }

    if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  }

  function handleSidebarLinkClicks(elementName) {
    handleSidebarClose();
    setLinkClick(elementName);
    navigate("/");
  }

  return (
    <div className={theme === "light" ? "nav light" : "nav dark"}>
      <div className="nav__logo">
        <h1>{t("app_title")}</h1>
      </div>

      <LanguageModal />
      <div className="nav__items">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder={t("lookup") + "..."}
            name="search"
            value={searchedProduct}
            onChange={(e) => {
              handleInputChange(e);
            }}
            autoComplete="off"
          />
          <button className="search-btn" onClick={handleSearch}>
            {t("search")}
          </button>
        </div>

        {/* Menu icon */}
        <div className="menu-icon" onClick={handleMenuClick}>
          <GiHamburgerMenu className="hover-pointer" />
        </div>

        {/* sidebar */}
        <div
          className={
            theme === "light" ? "nav__sidebar light" : "nav__sidebar dark"
          }
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="sidebar__header">
            <h3>{t("menu")}</h3>
            <AiOutlineClose
              className="sidebar__close-btn hover-pointer"
              onClick={handleSidebarClose}
            />
          </div>

          {/* sidebar items */}
          <div className="sidebar__content">
            <span
              onClick={() => {
                handleSidebarClose();
                navigate("/", { replace: true });
              }}
            >
              {t("home")}
            </span>
            <span
              onClick={() => {
                handleSidebarLinkClicks("contactUs");
              }}
            >
              {t("contact_us")}
            </span>
            <span
              onClick={() => {
                handleSidebarLinkClicks("aboutUs");
              }}
            >
              {t("about_us")}
            </span>

            <div className="theme">
              <ReactSwitch
                onChange={toggleTheme}
                checked={theme === "dark"}
                height={22}
                width={50}
                checkedIcon={false}
                uncheckedIcon={false}
              />
              {theme === "light" ? (
                <span>{t("light")}</span>
              ) : (
                <span>{t("dark")}</span>
              )}
            </div>

            <span onClick={toggleLangModal}>{t("language")}</span>
            <LanguageModal />
            {!currentUrl.includes("/cart") && (
              <BsFillCartPlusFill
                className="cart"
                onClick={() => {
                  handleSidebarClose();
                  navigate("cart");
                }}
              />
            )}
          </div>
        </div>

        {/* nav items */}
        <div className="nav-items-row">
          <a
            href="#contactUs"
            onClick={() => {
              handleLinkClick("contactUs");
            }}
          >
            {t("contact_us")}
          </a>
          <a
            href="#aboutUs"
            onClick={() => {
              handleLinkClick("aboutUs");
            }}
          >
            {t("about_us")}
          </a>

          <div className="theme">
            {theme === "light" ? (
              <span>{t("light")}</span>
            ) : (
              <span>{t("dark")}</span>
            )}
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
              height={22}
              width={50}
              checkedIcon={false}
              uncheckedIcon={false}
              // onColor={theme === "light" ? "#112d4e" : "#eeeeee"}
              // offColor={theme === "light" ? "#eeeeee" : "#112d4e"}
            />
          </div>

          <TbLanguage className="lang" onClick={toggleLangModal} />

          {!currentUrl.includes("/cart") && (
            <BsFillCartPlusFill
              className="cart"
              onClick={() => {
                navigate("cart");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
