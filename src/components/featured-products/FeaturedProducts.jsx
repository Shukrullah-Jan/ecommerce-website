import React from "react";
import { useTranslation } from "react-i18next";
import MediaCard from "../mini-components/Card";
import { useTheme } from "../../contexts/themeContext";
import { featuredProducts } from "../../api/featuredProducts";

import "./featuredProducts.scss";

const products = featuredProducts.map((item) => (
  <MediaCard
  
  key={item.id}
  id={item.id}
  name={item.name}
    price={item.price}
    desc={item.description}
    stars={item.star}
    url={item.url}
  />
));

const FeaturedProducts = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <section
      className={
        theme === "dark" ? "featured-products dark" : "featured-products light"
      }
    >
      <h1>{t("featured_products")}</h1>
      <div className="products">{products}</div>
    </section>
  );
};

export default FeaturedProducts;
