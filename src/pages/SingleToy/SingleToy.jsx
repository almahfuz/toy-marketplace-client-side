import React from "react";

const SingleToy = () => {
  return (
    <div className="px-10">
      <div className="card lg:card-side bg-base-100 shadow-xl container m-auto grid grid-cols-2 gap-3">
        <figure>
          <img className=" object-cover w-full"
            src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">toy name</h2>
          <p>seller name</p>
          <p>seller email</p>
          <p>price</p>
          <p>rating</p>
          <p>available quantity</p>
          <p> detail description</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
