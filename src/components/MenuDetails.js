import React from "react";
import {
  IconSquareRoundedFilled,
  IconStar,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import classes from "./MenuDetails.module.css";
import { IMG_CDN_URL } from "../environment";
function MenuDetails({ menuDetails }) {
  return (
    <div>
      {/* Display menu */}
      {menuDetails.map((menu) => {
        return (
          <div key={menu.card.info?.id}>
            <div className={classes.dFlex}>
              <div>
                {/* Check for veg/non veg */}
                <p>
                  {menu.card.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                    <IconSquareRoundedFilled
                      className={classes.nonVeg}
                      size={20}
                    />
                  ) : (
                    <IconSquareRoundedFilled
                      className={classes.veg}
                      size={20}
                    />
                  )}
                </p>
              </div>
              <div>
                {/* Check for Bestsellers */}
                <p>
                  {menu?.card?.info?.ribbon?.text === "Bestseller" && (
                    <span>
                      <IconStar size={14} /> Bestseller
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className={classes.dFlex}>
              {/* Display food item name and price */}
              <div>
                <h4>{menu.card.info?.name}</h4>

                <p>
                  <IconCurrencyRupee />
                  {menu.card.info?.price / 100}
                </p>
                <span>{menu.card.info?.description}</span>
              </div>
              <div>
                {/* Display food item image */}
                <div className={classes.foodImgWrapper}>
                  {!menu.card.info?.imageId ? null : (
                    <img
                      className={classes.foodImg}
                      src={IMG_CDN_URL + menu.card.info?.imageId}
                    />
                  )}
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default MenuDetails;
