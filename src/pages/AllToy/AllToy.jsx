import React, { useEffect, useState } from "react";
import AllToyData from "./AllToyData";

const AllToy = () => {
  const [allToyData, setAllToyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((data) => setAllToyData(data));
  }, []);

  return (
    <div className="min-h-[calc(100vh-136px)]">
      <div className="mt-5 md:mt-10">
        <div class=" capitalize text-2xl pt-10 pb-7 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          All Toys
        </div>
        <hr class="w-1/4 h-1 mx-auto bg-blueGray-200 border-0 rounded dark:bg-gray-700" />
        <div className="flex items-center justify-center pt-5 md:pt-10">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-neutral-700"
            />
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
