import React from "react";
import styled from "styled-components";
//Elements
import Heading from "../Elements/Heading/HeadingContent";
//import  Displayprojects from "../Elements/Display/Displayprojects";
import { FooterOne } from "../Elements/FirstFooter/FooterOne";

const Portfolio = () => {
  return (
    <div>
      <Colorbackground>
        <Heading />
      </Colorbackground>
      {/* <Displayprojects /> */}
      <FooterOne />
    </div>
  );
};

const Colorbackground = styled.div`
  min-height: 100vh;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: #e3eaf4;
`;

export default Portfolio;
