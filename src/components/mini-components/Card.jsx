import React from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

// icons
import { BsFillCartPlusFill } from "react-icons/bs";

// internal components
import { useTheme } from "../../contexts/themeContext";
import { useSelectedProduct } from "../../contexts/selectedProductContext";
import RatingDisplay from "./RatingDisplay";

// redux
import { cartProductsActions } from "../../features/cartProducts/cartProductsSlice";

import "./styles.scss";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 200,
  },

  media: {
    height: 200,
    maxHeight: 200,
    maxWidth: 300,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));

export default function MediaCard({
  id,
  name,
  price,
  desc,
  stars,
  url,
  isNewArrival,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { product, setSelectedProduct } = useSelectedProduct();
  const { t } = useTranslation();

  const classes = useStyles();

  const cartProducts = useSelector((state) => state.cartProducts.products);

  const handleViewProduct = () => {
    setSelectedProduct({ id, name, price, desc, stars, url });
    navigate("/productReview");
  };

  const handleAddToCart = () => {
    // check if current item is already added to cart
    const notExists = cartProducts.every((item) => item.id !== id);

    if (notExists || cartProducts.length == 0) {
      dispatch(
        cartProductsActions.addNewItem({ id, name, price, desc, stars, url })
      );
      console.log({ id, name, price, desc, stars, url });
    } else {
      window.alert("current item is already in the cart");
    }
  };

  return (
    <Card
      sx={{ maxWidth: 260, maxWidth: 260, minHeight: 340 }}
      className={theme === "light" ? "card light" : "card dark"}
    >
      <CardMedia className={classes.media} image={url} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name.length > 24 ? `${name.slice(1, 24)}...` : name}
        </Typography>

        {!isNewArrival && (
          <Typography className="product__description" variant="body2">
            {desc}
          </Typography>
        )}

        <div>
          <Typography variant="body1">Price: ${price}</Typography>
          <RatingDisplay rating={stars} />
        </div>
      </CardContent>
      <CardActions className="card-actions">
        <button
          onClick={() => {
            handleViewProduct();
          }}
        >
          {t("view_product")}
        </button>
        <BsFillCartPlusFill className="cart" onClick={handleAddToCart} />
      </CardActions>
    </Card>
  );
}
