import React, { useState } from "react";
import FoodItem from "./FoodItem";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import MenuDetails from "./MenuDetails";
function RestaurantMenu({ menu }) {
  const [isVisible, setIsVisible] = useState(true);
  const hidemenu = () => setIsVisible(false);
  const showmenu = () => setIsVisible(true);
  return (
    <div>
      {menu?.map((food) => {
        console.log(food);
        return (
          <div>
            <h2>
              {food.title} ({food.itemCards.length})
            </h2>
            {/* Show hide menu details */}
            {isVisible ? (
              <IconChevronUp onClick={hidemenu} />
            ) : (
              <IconChevronDown onClick={showmenu} />
            )}
            {isVisible ? <MenuDetails menuDetails={food.itemCards} /> : <hr />}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantMenu;
