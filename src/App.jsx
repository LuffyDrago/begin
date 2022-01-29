import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

//Component
//import Navbar from "./Component/Navbar/Nav";
import Navbar from "./Component/Navbar/NavbarTwo";
//Elements
// import Heading from "./Elements/Heading/HeadingContent";

//Pages
import MyServices from "./pages/MyServices";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
//Router
import { Switch, Route } from "react-router-dom";

const App = () => {
  // Aos.init();
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Portfolio />
        </Route>

        <Route path="/services" component={MyServices} />
        {/* <MyServices /> */}
        {/* </Route> */}

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/blog" exact>
          <Blog />
        </Route>

        <Route path="/contact" exact>
          <ContactUs />
        </Route>
      </Switch>
    </>
  );
};

export default App;
