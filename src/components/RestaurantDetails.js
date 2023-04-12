import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "./GetResDetails";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
function RestaurantDetails() {
  const { resId } = useParams();

  const restaurant = useRestaurantDetails(resId);
  return (
    <div>
      <RestaurantInfo restaurant={restaurant?.info} />
      <RestaurantMenu menu={restaurant?.menu} />
    </div>
  );
}

export default RestaurantDetails;
