import React from "react";
import Common from "./Common";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="navbackground">
      <Common
        name="Make Your own"
        // imgsrc={web}
        visit="/About"
        btname="Get Started"
      />
      <Footer />
    </div>
  );
};

export default Home;
