import React from "react";
import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";
import Silder from "../../Layout/SilderHomeEx/Silder";
import { Helmet } from "react-helmet-async";
import ExtraPage from "../../assets/shared/Extra/ExtraPage";

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
      <ExtraPage></ExtraPage>
    </div>
  );
};

export default Home;
