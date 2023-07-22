import React, { useContext, useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import Banner from "../Banner/Banner";
import ShopCategory from "../ShopCategory/ShopCategory";
import Silder from "../../Layout/SilderHomeEx/Silder";
import { Helmet } from "react-helmet-async";
import ExtraPage from "../../assets/shared/Extra/ExtraPage";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { loading, setLoading } = useContext(AuthContext);
 
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center  items-center">
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
