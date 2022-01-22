import * as styles from "./Headingstyle";
import Lottie from "react-lottie";
import animationData from "../lotties/star-studio-illus-Hero";

import React from "react";

const Heading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <>
      <styles.Wrapper>
        <styles.Container>
          <div className="heroleft">
            <styles.Heroheading>
              <p>
                Solving Design Problems through Human-Centered Design in a
                Coding environment
              </p>
            </styles.Heroheading>
            <div className="hero-smalltext"></div>
          </div>

          <div className="heroright">
            <div className="image-icon">
              <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                background="transparent"
              />
            </div>
          </div>
        </styles.Container>
      </styles.Wrapper>
    </>
  );
};

export default Heading;
