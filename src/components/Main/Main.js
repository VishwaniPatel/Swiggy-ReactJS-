import React, { useEffect, useState } from "react";
import { FETCH_RESTAURANTS } from "../../environment";

import RestaurantList from "../RestaurantList";

function Main() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    //API CALL to fetch list of restaurants
    const data = await fetch(FETCH_RESTAURANTS);
    const json = await data.json();
    if (json) {
      setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    }
  }
  return (
    <div>
      <RestaurantList restaurants={allRestaurants} />
    </div>
  );
}

export default Main;
