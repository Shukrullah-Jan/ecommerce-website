import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// icons
import { MdDeleteForever } from "react-icons/md";
import EmptyCart from "../../files/images/emptycart.svg";

// internal components
import { useTheme } from "../../contexts/themeContext";
import Footer from "../footer/Footer";

//redux
import { cartProductsActions } from "../../features/cartProducts/cartProductsSlice";

import "./cart.scss";

export default function Cart() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartProducts.products);

  const isLight = theme == "light";

  function handleRemoveItem(itemId) {
    const newItems = [];

    // removes the clicked product from the cart list
    cartProducts.forEach((item) => {
      if (item.id != itemId) newItems.push(item);
    });

    dispatch(cartProductsActions.removeItem(newItems));
  }

  return (
    <div className={isLight ? "main-cart light" : "main-cart dark"}>
      <section className="main-cart__header">
        <div className="banner">
          <h2>#Your Items</h2>
          <p>Manage your ideal items using table below</p>
        </div>
      </section>

      {cartProducts.length == 0 && (
        <section className="main-cart__empty-cart">
          <img src={EmptyCart} alt="empty cart" />
          <h2>Your cart is empty!</h2>
          <button onClick={() => navigate("/")}>Explore Wishlist</button>
        </section>
      )}

      {cartProducts.length > 0 && (
        <div className="main-cart__products-cont">
          <section className="table">
            <table className="selected-products">
              <thead>
                <tr>
                  <th>Remove</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <MdDeleteForever
                          className="remove-product"
                          onClick={() => {
                            handleRemoveItem(item.id);
                          }}
                        />
                      </td>
                      <td>
                        <img
                          src={item.url}
                          alt={item.name}
                          className="selected-products__product-img"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>1</td>
                      <td>{item.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>

          <section className="main-cart__coupon">
            <h3>Apply Coupon</h3>
            <div className="coupon__form">
              <input type="text" placeholder="Enter your Coupon" />
              <button className="basic-btn">Apply</button>
            </div>
          </section>

          <section className="main-cart__cart-totals">
            <h3>Cart Totals</h3>
            <table className="cart-totals-table">
              <tbody>
                <tr>
                  <td>Cart subtotal</td>
                  <td>$430</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$2</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>$432</td>
                </tr>
              </tbody>
            </table>
            <button className="basic-btn">Proceed to checkout</button>
          </section>
        </div>
      )}

      <section className="main-cart__footer">
        <Footer />
      </section>
    </div>
  );
}
