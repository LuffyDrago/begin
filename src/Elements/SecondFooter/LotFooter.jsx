import React from "react";

import Lottie from "react-lottie";
import animationData from "../lotties/fourdots.json";
const LotFooter = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div>
      <div className="fourdots">
        <Lottie
          options={defaultOptions}
          height={100}
          width={100}
          background="transparent"
        />
      </div>
    </div>
  );
};

export default LotFooter;
