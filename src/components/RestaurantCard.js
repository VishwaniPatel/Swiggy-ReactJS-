import React from "react";
import classes from "./RestaurantCard.module.css";
import { IconStar } from "@tabler/icons-react";
import { IMG_CDN_URL } from "../environment";
function RestaurantCard({ cardData }) {
  // Check average rating type
  let ratingType;
  if (cardData.avgRating >= 4.0) {
    ratingType = "green";
  } else if (cardData.avgRating < 4.0 && cardData.avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }
  return (
    // Display restaurant card
    <div className={classes.card} key={cardData.id}>
      <img src={IMG_CDN_URL + cardData.cloudinaryImageId} />
      <div className={classes["res-name"]}>
        <h5 className={classes.resName}>{cardData.name}</h5>
        <p>{cardData.cuisines.join(", ")}</p>
      </div>
      <div className={classes.resInfo}>
        {cardData.avgRating && (
          <div className={classes.resInfo}>
            <IconStar size={14} color={ratingType} />
            <p className={classes.ratings + ratingType}>{cardData.avgRating}</p>
          </div>
        )}
        <p> {cardData.lastMileTravelString}</p>
        <p> {cardData.costForTwoString}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
