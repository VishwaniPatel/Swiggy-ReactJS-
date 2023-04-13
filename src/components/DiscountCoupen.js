import React from "react";
function DiscountCoupen({ coupens }) {
  return (
    // Displaying coupen details
    <div>
      {coupens?.map((items) => {
        return (
          <div className="">
            <p>{items?.meta}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DiscountCoupen;
