import React from "react";
import FoodItem from "./FoodItem";
function RestaurantMenu({ menu }) {
  return (
    <div>
      {menu?.map((food) => (
        <FoodItem food={food} />
      ))}
    </div>
  );
}

export default RestaurantMenu;
