import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

// icons
import { BsFillCartPlusFill } from "react-icons/bs";

import { useTheme } from "../../contexts/themeContext";
import { useSelectedProduct } from "../../contexts/selectedProductContext";
import RatingDisplay from "../mini-components/RatingDisplay";
import FeaturedProducts from "../featured-products/FeaturedProducts";

import "./productReview.scss";

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 200,
  },

  media: {

    height: 340,
    width: 400,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));

export default function ProductReview() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { product } = useSelectedProduct();

  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts or updates
  }, []);

  const handleBackButton = () => {
    navigate(-1, { replace: true });
  };

  return (
    <section
      className={
        theme === "light" ? "product-review light" : "product-review dark"
      }
    >
      <div className="product-review__btn-div">
        <button onClick={handleBackButton}>Go back</button>
      </div>
      <Card
        sx={{ minWidth: 360, minHeight: 400 }}
        className={theme === "light" ? "card light" : "card dark"}
      >
        <CardMedia
          className={classes.media}
          // sx={{ height: 200 }}
          // component="img"
          // height="1000px"
          // width="200px"
          image={product.url}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography className="product__description" variant="body2">
            {product.desc}
          </Typography>
          <div>
            <Typography variant="h5">Price: ${product.price}</Typography>
            <Typography variant="h5">
              Rating: <RatingDisplay rating={product.stars} />
            </Typography>
          </div>
        </CardContent>
        <CardActions className="product-review__card-actions">
          <Typography variant="h5" className="product-review__cart-text">
            Add to cart:
            <span className="product-review__cart">
              <BsFillCartPlusFill className="cart__icon" />
            </span>
          </Typography>
        </CardActions>
      </Card>

      <div className="product-review__featured-products">
        <FeaturedProducts />
      </div>
    </section>
  );
}
