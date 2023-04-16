import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import ProductReview from "./components/product-review/ProductReview";
import Cart from "./components/cart/Cart";
import { ThemeContextProvider } from "./contexts/themeContext";
import { SelectedProductContextProvider } from "./contexts/selectedProductContext";

import "./styles.scss";
import SearchedProducts from "./components/searched-products/SearchedProducts";

const App = () => {
  const [linkClicked, setLinkClicked] = useState("");

  // handles link click on navbar to scroll to desired section
  const handleLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSidebarLinkClick = (element) => {
    setLinkClicked(element);
  };

  return (
    <ThemeContextProvider>
      <SelectedProductContextProvider>
        <Router>
          <Navbar
            handleLinkClick={handleLinkClick}
            setLinkClick={handleSidebarLinkClick}
          />
          <Routes>
            <Route path="/">
              <Route index element={<Main linkClicked={linkClicked} />} />
            </Route>
            <Route path="/productReview" element={<ProductReview />} />
            <Route path="/searchedProduct" element={<SearchedProducts />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </SelectedProductContextProvider>
    </ThemeContextProvider>
  );
};
export default App;
