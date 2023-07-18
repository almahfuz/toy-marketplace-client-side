import { Rating } from "flowbite-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const singleToyUpdate = useLoaderData();
  const {
    _id,
    ImagesURL,
    ToyName,
    SellerName,
    SellerEmail,
    SubCategory,
    DetailDescription,
    Price,
    AvailableQuantity,
  } = singleToyUpdate;

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const ToyName = form.ToyName.value;
    const SellerName = form.SellerName.value;
    const SellerEmail = form.SellerEmail.value;
    const SubCategory = form.SubCategory.value;
    const Price = form.Price.value;
    const AvailableQuantity = form.AvailableQuantity.value;
    const DetailDescription = form.DetailDescription.value;
    const ImagesURL = form.ImagesURL.value;

    const UpdateToy = {
      ImagesURL,
      ToyName,
      SellerName,
      SellerEmail,
      SubCategory,
      DetailDescription,
      Price,
      AvailableQuantity,
    };
    console.log(UpdateToy);

    fetch(`https://toy-market-sever-almahfuz.vercel.app/ToyUpdate/${_id}`, {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(UpdateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated toy Successfully",
            icon: "success",
            confirmButtonText: "Successfully updated",
          });
        }
      });
  };

  return (
    <div className=" px-10 md:px-12 pt-5">
        <Helmet>
        <title>Toy Market | Update Toy </title>
      </Helmet>
      <form onSubmit={handleUpdateToy} className="w-full py-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Picture URL of the toy
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="ImagesURL"
              placeholder="Picture URL"
              defaultValue={ImagesURL}
              
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Toy Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="ToyName"
              defaultValue={ToyName}
              placeholder="Toy Name"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              seller name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="SellerName"
              defaultValue={SellerName}
              placeholder="seller name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Sub Category
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="SubCategory"
              defaultValue={SubCategory}
              placeholder="Sub category"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              seller Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="SellerEmail"
              defaultValue={SellerEmail}
              placeholder="seller Email"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="Price"
              defaultValue={Price}
              placeholder="Price"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Available quantity
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="AvailableQuantity"
              defaultValue={AvailableQuantity}
              placeholder="Available quantity"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Detail description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="DetailDescription"
              defaultValue={DetailDescription}
              placeholder="Detail Descriptions"
              required
            />
          </div>
        </div>
       
        <div className="flex items-center justify-center">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Update a Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
