import * as styles from "./Secondstyles";
import Lottie from "react-lottie";
import animationData from "../lotties/starmoon.json";
import LotFooter from "./LotFooter";
import AbsoluteFooter from "../FirstFooter/AbsoluteFooter";

// import animationtwo from "../lotties/fourdots.json";

const FooterTwo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <styles.SecondFooter>
        <styles.Container>
          <div className="heroleft">
            <styles.Heroheading>
              <p>Hand-crafted design exclusively created for your project</p>
            </styles.Heroheading>
            <div className="hero-smalltext">
              <a href="mailto:victor.muchemi.m@gmail.com">Let’s Connect</a>
            </div>
          </div>

          <div className="heroright">
            <div className="image-icon">
              <Lottie
                options={defaultOptions}
                height={200}
                width={200}
                background="transparent"
              />
            </div>
            <div className="fourdots">
              <LotFooter />
            </div>
          </div>
        </styles.Container>
      </styles.SecondFooter>

      <AbsoluteFooter />
    </>
  );
};

export default FooterTwo;
