import React, { useEffect, useState } from "react";
import AllToyData from "./AllToyData";
import { Helmet } from "react-helmet-async";

const AllToy = () => {
  const [allToyData, setAllToyData] = useState([]);

  useEffect(() => {
    fetch("https://toy-market-sever-almahfuz.vercel.app/alltoy")
      .then((res) => res.json())
      .then((data) => setAllToyData(data));
  }, []);

  return (
    <div className="min-h-[calc(100vh-136px)]">
      <Helmet>
        <title>Toy Market | Gallery </title>
      </Helmet>
      <div className="mt-5 md:mt-10">
        <div class=" capitalize text-2xl pt-10 pb-7 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Toys Gallery
        </div>
        <hr class="w-1/4 h-1 mx-auto bg-blueGray-200 border-0 rounded dark:bg-gray-700" />
        <div className=" pt-5 md:pt-10"></div>
        <div className="mt-5 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
            {allToyData.map((allToyData) => (
              <AllToyData
                key={allToyData._id}
                allToyData={allToyData}
              ></AllToyData>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
