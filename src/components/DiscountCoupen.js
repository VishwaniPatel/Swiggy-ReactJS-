import React from "react";
function DiscountCoupen({ coupens }) {
  return (
    // Displaying coupen details
    <div>
      {coupens?.map((items, index) => {
        return (
          <div key={index}>
            <p>{items?.meta}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DiscountCoupen;
