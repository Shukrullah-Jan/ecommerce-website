import React from "react";

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

import "./styles.scss";

const RatingDisplay = ({ rating }) => {
  // Convert rating to integer
  const ratingInt = Math.floor(rating);

  // Generate an array of stars based on rating
  const stars = Array(5)
    .fill(0)
    .map((_, index) => {
      const starValue = index + 1;
      return (
        <BsStarFill
          key={index}
          className={starValue <= ratingInt ? "star active" : "star"}
        />
      );
    });

  return <div className="rating">{stars}</div>;
};

export default RatingDisplay;
