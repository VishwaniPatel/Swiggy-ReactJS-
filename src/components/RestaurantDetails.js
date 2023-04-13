import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "./GetResDetails";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
function RestaurantDetails() {
  //retrieve restaurant id from params
  const { resId } = useParams();
  // get restaurant details using custom hook
  const restaurant = useRestaurantDetails(resId);
  return (
    <div>
      <RestaurantInfo restaurant={restaurant?.info} key={restaurant?.info.id} />
      <RestaurantMenu menu={restaurant?.menu} />
    </div>
  );
}

export default RestaurantDetails;
