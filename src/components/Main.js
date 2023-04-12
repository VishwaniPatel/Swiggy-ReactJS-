import React, { useEffect, useState } from "react";
import { FETCH_RESTAURANTS } from "../environment";

import RestaurantList from "./RestaurantList";

function Main() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    //API CALL
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS);
    const json = await data.json();
    if (json) {
      console.log("Res data", json.data?.cards[2]?.data?.data?.cards); //get data from api

      setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    } else {
      console.log("No data found");
    }
  }

  console.log("All", allRestaurants);
  return (
    <div>
      <RestaurantList restaurants={allRestaurants} />
    </div>
  );
}

export default Main;
