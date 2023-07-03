import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleDataToy = useLoaderData();
  const {
    _id,
    ToyName,
    ImagesURL,
    Price,
    Rating,
    DetailDescription,
    SellerName,
    SellerEmail,
    AvailableQuantity,
  } = singleDataToy;
  return (
    <div className="px-10 pt-10 min-h-[calc(100vh-136px)]">
      <div className="card lg:card-side bg-base-100 shadow-xl container m-auto grid grid-cols-1 md:grid-cols-2 gap-3">
        <figure>
          <img
            className=" object-cover w-full h-96"
            src={ImagesURL}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ToyName}</h2>
          <div>Seller name : {SellerName}</div>
          <div>seller email: {SellerEmail}</div>
          <div>price: £{Price}</div>
          <div>Rating: {Rating}</div>
          <div>Available Quantity: {AvailableQuantity}</div>
          <div> Detail Descriptions: {DetailDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
