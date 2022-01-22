import React from "react";
import * as styles from "./Footerstyles";
import { Link } from "react-router-dom";
const AbsoluteFooter = () => {
  return (
    <div>
      <styles.SmallFooter>
        <styles.LastFooter>
          <Link
            to={{ pathname: "https://github.com/LuffyDrago" }}
            target="_blank"
          >
            Github
          </Link>
          /<Link to="/contact">Let’s Connect</Link> /
          <Link
            to={{ pathname: " https://dribbble.com/Blackzoro" }}
            target="_blank"
          >
            Dribble
          </Link>
        </styles.LastFooter>
      </styles.SmallFooter>
    </div>
  );
};

export default AbsoluteFooter;
