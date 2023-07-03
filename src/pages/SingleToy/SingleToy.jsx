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
    <div className="px-10 min-h-[calc(100vh-136px)]">
      <div className="card lg:card-side bg-base-100 shadow-xl container m-auto grid grid-cols-2 gap-3">
        <figure>
          <img
            className=" object-cover w-full h-96"
            src={ImagesURL}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ToyName}</h2>
          <p>Seller name : {SellerName}</p>
          <p>seller email: {SellerEmail}</p>
          <p>price: £{Price}</p>
          <p>Rating: {Rating}</p>
          <p>Available Quantity: {AvailableQuantity}</p>
          <p> Detail Descriptions: {DetailDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
