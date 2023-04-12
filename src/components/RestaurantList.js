import React from "react";
import RestaurantCard from "./RestaurantCard";
import classes from "./RestaurantList.module.css";
function RestaurantList({ restaurants }) {
  return (
    <div className={classes.restaurantLists}>
      {restaurants.map((data) => {
        return <RestaurantCard key={data.id} cardData={data.data} />;
      })}
    </div>
  );
}

export default RestaurantList;
