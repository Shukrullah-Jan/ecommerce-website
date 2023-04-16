import React, { Suspense } from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import App from "./App";
import { store } from "./app/store";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr", "ar"],
    fallbackLng: "en", // incase of unknown lang, eng is used
    detection: {
      // comes from BD library. It detects lang based on the following order
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"], // stores lng in cookie
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const loading = (
  <div>
    <h2>Loading...</h2>
  </div>
);

const container = document.querySelector("#root");
const root = ReactDom.createRoot(container);
root.render(
  // Suspense used for preventing unusal behaviour of when the page loads
  <Suspense fallback={loading}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
