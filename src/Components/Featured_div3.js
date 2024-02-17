import React from "react";
import Featured_div3_section from "./UI/Featured_div3_section";
import Devider from "./UI/Devider";

const Featured_div3 = () => {
  return (
    <div className="Featured_div3">
      <Featured_div3_section />
      <Devider />
      <Featured_div3_section /> <Devider />
      <Featured_div3_section />
    </div>
  );
};

export default Featured_div3;
