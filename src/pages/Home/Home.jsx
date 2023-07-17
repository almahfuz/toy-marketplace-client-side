import React from "react";
import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";
import Silder from "../../Layout/SilderHomeEx/Silder";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-136px)]">
      <Helmet>
        <title>Toy Market | Home </title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <Silder></Silder>
    </div>
  );
};

export default Home;
