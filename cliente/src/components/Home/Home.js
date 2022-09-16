import React from "react";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import IndividualIntervalsHeroImage from "../HeroImage/HeroImage";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Menu";

const Home = () => {
  return (
    <div>
          <Navbar/>
          <IndividualIntervalsHeroImage/>
          <Cart/>
          <Products/>
          <Footer/>
    </div>
  );
};

export default Home;
