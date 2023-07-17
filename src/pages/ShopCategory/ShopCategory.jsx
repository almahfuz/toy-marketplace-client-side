import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../ShopCategory/shopCatagory.css";
import AllToyData from "../AllToyEx/AllToyData";
import ShopData from "./ShopData/ShopData";
const ShopCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [selectedCatagories, setSelectedCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
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
              Main Catagories 1
            </Tab>
            <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
              Main Catagories 2
            </Tab>
            <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
              Main Catagories 3
            </Tab>
          </TabList>
          <TabPanel>
            <Tabs
              defaultIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className="grid grid-flow-col text-center gap-2 text-gray-500 bg-gray-100  p-1">
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 1 with Sub-1
                </Tab>
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 1 with Sub-2
                </Tab>
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 1 with Sub-3
                </Tab>
              </TabList>

              {/* main 1-1 */}

              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
              {/* main 1-2 */}
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
              {/* main 1-3 */}
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>

          {/* main 2  */}
          <TabPanel>
            <Tabs
              defaultIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className="grid grid-flow-col text-center gap-2 text-gray-500 bg-gray-100  p-1">
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 2 with Sub-1
                </Tab>
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 2 with Sub-2
                </Tab>
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 2 with Sub-3
                </Tab>
              </TabList>
              {/* main 2-1 */}
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
            {/* main 2-2 */}
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
              {/* main 2-3 */}
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>

           {/* main 3  */}
           <TabPanel>
            <Tabs
              defaultIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className="grid grid-flow-col text-center gap-2 text-gray-500 bg-gray-100  p-1">
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 2 with Sub-1
                </Tab>
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 2 with Sub-2
                </Tab>
                <Tab className="flex justify-center py-4 focus:outline-none cursor-pointer rounded-lg">
                  Main Catagorieds 2 with Sub-3
                </Tab>
              </TabList>
              {/* main 3-1 */}
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
            {/* main 3-2 */}
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
              {/* main 3-3 */}
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
                  {selectedCatagories.slice(0,3).map((CatagoriesData) => (
                    <ShopData
                      key={CatagoriesData._id}
                      CatagoriesData={CatagoriesData}
                    ></ShopData>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
