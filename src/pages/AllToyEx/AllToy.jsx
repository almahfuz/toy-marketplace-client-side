import React, { useEffect, useState } from "react";
import AllToyData from "./AllToyData";
import { Helmet } from "react-helmet-async";

const AllToy = () => {
  const [allToyData, setAllToyData] = useState([]);
  const [SearchName, setSearchName] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((data) => setAllToyData(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/getSearchText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchName(data);
      });
  };
  return (
    <div className="min-h-[calc(100vh-136px)]">
      <Helmet>
        <title>Toy Market | All Toy </title>
      </Helmet>
      <div className="mt-5 md:mt-10">
        <div class=" capitalize text-2xl pt-10 pb-7 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          All Toys
        </div>
        <hr class="w-1/4 h-1 mx-auto bg-blueGray-200 border-0 rounded dark:bg-gray-700" />
        <div className=" pt-5 md:pt-10">
        <div className="flex items-center justify-center">
            <div className="flex space-x-1">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button onClick={handleSearch} className="px-4 text-white bg-blueGray-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        </div>
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
