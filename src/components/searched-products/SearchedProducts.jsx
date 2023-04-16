import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTheme } from "../../contexts/themeContext";
import { newArrivals } from "../../api/newArrivalsProducts";
import { featuredProducts } from "../../api/featuredProducts";
import MediaCard from "../mini-components/Card";

import "./searchedProducts.scss";

const SearchedProducts = () => {
  const { theme } = useTheme();
  const searchedProduct = useSelector(
    (state) => state.searchedProduct.productName
  );

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/", { replace: true });
  };

  const foundProducts = useMemo(() => {
    if (searchedProduct.trim() === "" || searchedProduct.length === 0)
      return [];
    const productList = [];

    for (let i in newArrivals) {
      if (newArrivals[i].name.includes(searchedProduct)) {
        productList.push(newArrivals[i]);
      }
    }

    for (let i in featuredProducts) {
      if (featuredProducts[i].name.includes(searchedProduct)) {
        productList.push(featuredProducts[i]);
      }
    }

    console.log(productList);

    return productList;
  }, [searchedProduct]);

  return (
    <section
      className={
        theme == "light" ? "searched-products light" : "searched-products dark"
      }
    >
      <div className="searched-products__btn-div">
        <button onClick={handleBackButton}>Go back</button>
      </div>

      <h2>Search results </h2>
      <div className="found-products">
        {foundProducts.length > 0 ? (
          foundProducts.map((product) => {
            return (
              <MediaCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                desc={product.description}
                stars={product.star}
                url={product.url}
              />
            );
          })
        ) : (
          <div className="empty-items">
            <h3>No products found!</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchedProducts;
