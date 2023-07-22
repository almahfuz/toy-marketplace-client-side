import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../ShopCategory/shopCatagory.css";
import AllToyData from "../AllToyEx/AllToyData";
import ShopData from "./ShopData/ShopData";
import { AuthContext } from "../Provider/AuthProvider";
const ShopCategory = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [tabIndex, setTabIndex] = useState(0);

  const [selectedCatagories, setSelectedCatagories] = useState([]);
  
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
  useEffect(() => {
    fetch("https://toy-market-sever-omega.vercel.app/alltoy")
      .then((res) => res.json())
      .then((data) => setSelectedCatagories(data));
  });

  return (
    <div className="mt-5 md:mt-10">
      <div class=" capitalize text-2xl pt-10 pb-7 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Catagories
      </div>
      <hr class="w-1/4 h-1 mx-auto bg-blueGray-200 border-0 rounded dark:bg-gray-700" />

      <div className="pt-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="grid grid-flow-col gap-2 text-center text-gray-500 bg-gray-100  p-1">
            <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
              Drilling Toy
            </Tab>
            <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
              Wood Toy
            </Tab>
            <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
              Building Block
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
              {selectedCatagories.slice(4, 7).map((CatagoriesData) => (
                <ShopData
                  key={CatagoriesData._id}
                  CatagoriesData={CatagoriesData}
                ></ShopData>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
              {selectedCatagories.slice(1, 4).map((CatagoriesData) => (
                <ShopData
                  key={CatagoriesData._id}
                  CatagoriesData={CatagoriesData}
                ></ShopData>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
              {selectedCatagories.slice(7, 10).map((CatagoriesData) => (
                <ShopData
                  key={CatagoriesData._id}
                  CatagoriesData={CatagoriesData}
                ></ShopData>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
