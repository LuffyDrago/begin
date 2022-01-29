import * as styles from "./Headingstyle";
import Lottie from "react-lottie";
import animationData from "../lotties/star-studio-illus-Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const Heading = () => {
  AOS.init({
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <>
      <styles.Wrapper>
        <styles.Container>
          <div className="heroleft" data-aos="fade-right">
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
                className="lotta"
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
