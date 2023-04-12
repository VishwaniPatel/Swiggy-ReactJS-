import React from "react";
import classes from "./RestaurantCard.module.css";
import { IconStar } from "@tabler/icons-react";
import { IMG_CDN_URL } from "../environment";
function RestaurantCard({ cardData }) {
  console.log({ cardData });
  let ratingType;
  if (cardData.avgRating >= 4.0) {
    ratingType = "green";
  } else if (cardData.avgRating < 4.0 && cardData.avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }
  return (
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
    // <div className={classes.card}>
    //   <li>{cardData.id}</li>
    //   <li>{cardData.name}</li>
    //   <li>{cardData.lastMileTravelString}</li>
    //   <img src={IMG_CDN_URL + cardData.cloudinaryImageId} />
    //   <li>{cardData.avgRating}</li>
    //   <li>{cardData.costForTwoString}</li>
    // </div>
  );
}

export default RestaurantCard;
