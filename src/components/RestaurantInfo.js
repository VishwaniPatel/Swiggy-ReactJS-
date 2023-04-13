import {
  IconStar,
  IconBike,
  IconCoinRupee,
  IconLeaf,
} from "@tabler/icons-react";
import DiscountCoupen from "./DiscountCoupen";
import classes from "./RestaurantInfo.module.css";
const RestaurantInfo = ({ restaurant }) => {
  console.log(restaurant);
  return (
    <div>
      <p>
        Home / {restaurant?.city} / {restaurant?.areaName} / {restaurant?.name}{" "}
      </p>
      <div className={classes.dFlex}>
        {/* Display restaurant information */}
        <div>
          <h2>{restaurant?.name}</h2>
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <p>
            {restaurant?.areaName}, {restaurant?.city}
          </p>
        </div>
        <div className={classes.rating}>
          <IconStar size={14} />
          <h4>{restaurant?.avgRating} </h4>
          <p>{restaurant?.totalRatingsString}</p>
        </div>
      </div>

      <p>
        <IconBike size={14} />
        {restaurant?.feeDetails?.message}
      </p>
      <hr />
      <p>
        <IconCoinRupee />
        {restaurant?.costForTwoMessage}
      </p>
      {/* Display discount coupen details */}
      <div>
        <DiscountCoupen
          coupens={restaurant?.aggregatedDiscountInfo.descriptionList}
          key={restaurant?.id}
        />
      </div>

      <div>
        {restaurant?.veg && (
          <p>
            <IconLeaf />
            Pure Veg
          </p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default RestaurantInfo;
