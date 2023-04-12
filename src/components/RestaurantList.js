import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import classes from "./RestaurantList.module.css";
function RestaurantList({ restaurants }) {
  return (
    <div className={classes.restaurantLists}>
      {restaurants?.map((data) => {
        return (
          <Link to={"/restaurant/" + data.data.id} key={data.data.id}>
            <RestaurantCard key={data.id} cardData={data.data} />
          </Link>
        );
      })}
    </div>
  );
}

export default RestaurantList;
