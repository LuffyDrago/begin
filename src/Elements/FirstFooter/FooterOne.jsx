import * as styles from "./Footerstyles";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../lotties/footer.json";

export const FooterOne = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <styles.MainFooter>
      <styles.InnerFooter>
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
                height={500}
                width={500}
                background="transparent"
              />
            </div>
          </div>
        </styles.Container>
      </styles.InnerFooter>

      <styles.SmallFooter>
        <styles.LastFooter>
          <Link
            to={{ pathname: "https://github.com/LuffyDrago" }}
            target="_blank"
          >
            Github
          </Link>
          / <a href="mailto:victor.muchemi.m@gmail.com">Let’s Connect</a> /
          <Link
            to={{ pathname: " https://dribbble.com/Blackzoro" }}
            target="_blank"
          >
            Dribble
          </Link>
        </styles.LastFooter>
      </styles.SmallFooter>
    </styles.MainFooter>
  );
};
