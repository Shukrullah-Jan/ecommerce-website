import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MediaCard from "../mini-components/Card";
import { useTheme } from "../../contexts/themeContext";
import { newArrivals } from "../../api/newArrivalsProducts";

import "./newArrivals.scss";

// const products = newArrivals.map((item) => (
//   <MediaCard
//     key={item.id}
//     id={item.id}
//     name={item.name}
//     price={item.price}
//     desc={item.description}
//     stars={item.star}
//     url={item.url}
//   />
// ));

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  const { theme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.map((item) => (
            <MediaCard
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              desc={item.description}
              stars={item.rating.rate}
              url={item.image}
              isNewArrival={true}
            />
          ))
        );
      });
  });
  return (
    <section
      className={theme === "dark" ? "new-arrivals dark" : "new-arrivals light"}
    >
      <h1>{t("new_arrival")}</h1>
      <div className="products">{products}</div>
    </section>
  );
};

export default NewArrivals;
