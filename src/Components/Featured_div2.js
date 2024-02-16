import React from "react";
import Featured_div2_card from "./UI/Featured_div2_card";

const Featured_div2 = () => {
  return (
    <div className="Featured_div2">
      <div className="cards">
        <Featured_div2_card
          title="MORDHAU - Gold Edition"
          discount="66"
          price_before="2329"
          price="791.00"
        />
        <Featured_div2_card
          title="MORDHAU - Gold Edition"
          discount="66"
          price_before="2329"
          price="791.00"
        />
        <Featured_div2_card
          title="Check out all the deals for this week."
          Link="Browse"
        />
      </div>
    </div>
  );
};

export default Featured_div2;
