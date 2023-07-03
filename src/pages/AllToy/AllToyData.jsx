import React from "react";

const AllToyData = ({ allToyData }) => {
  const {
    _id,
    ToyName,
    ImagesURL,
    Price,
    Rating,
    DetailDescription,
    SubCategory,
    AvailableQuantity,
  } = allToyData;
  console.log(allToyData);

  return (
    <div className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
      <div className="relative flex items-end overflow-hidden rounded-xl">
        <img className="h-80 w-full object-cover" src={ImagesURL} alt="" />
        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blueGray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          <span className="ml-1 text-sm text-slate-400">{Rating}</span>
        </div>
      </div>

      <div className="mt-1 p-2">
        <h2 className="text-slate-700">{ToyName}</h2>
        <p className="mt-1 text-sm text-slate-400">Category: {SubCategory}</p>
        <p className="mt-1 text-sm text-slate-400">
          Available Quantity: {AvailableQuantity}
        </p>

        <div className="mt-3 flex items-end justify-between">
          <p>
            <span className="text-lg font-bold text-orange-500">
              Price: £{Price}
            </span>
          </p>

          <div className="inline-flex rounded-xl">
            <button class="btn btn-sm  bg-orange-100 py-1 px-3 focus:outline-none  hover:bg-orange-200">
              {" "}
              View Details{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToyData;
