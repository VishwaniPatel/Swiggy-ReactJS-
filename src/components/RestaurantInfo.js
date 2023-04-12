const RestaurantInfo = ({ restaurant }) => {
  return (
    <div>
      <div>
        <h2>{restaurant?.name}</h2>

        <p>{restaurant?.cuisines?.join(", ")}</p>
        <p>
          {restaurant?.areaName}, {restaurant?.city}
        </p>
        {restaurant?.veg && <p>Pure Veg</p>}
      </div>
      <div>
        <h4>{restaurant?.avgRating} </h4>
        <p>{restaurant?.totalRatingsString}</p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
