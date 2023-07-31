import React, { useContext, useEffect, useState } from "react";
import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";
import Silder from "../../Layout/SilderHomeEx/Silder";
import { Helmet } from "react-helmet-async";
import ExtraPage from "../../assets/shared/Extra/ExtraPage";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { loading } = useContext(AuthContext);
  const [isFetching, setIsFetching] = useState(true); 
 
  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false); 
    }, 8000);
  }, []);

  if (isFetching) {
    return (
      <div className="flex justify-center  items-center min-h-[calc(100vh-136px)]">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
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
