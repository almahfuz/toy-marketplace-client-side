import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../pages/Provider/AuthProvider';

const AllOfToy = () => {
  const { user,loading } = useContext(AuthContext);
  const [SearchName, setSearchName] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    fetch(`https://toy-market-sever-omega.vercel.app/allToyDetails`)
      .then((res) => res.json())
      .then((data) => setSearchName(data));
  }, [user]);

  const handleSearch = () => {
    fetch(`https://toy-market-sever-omega.vercel.app/getSearchText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchName(data);
      });
  };

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
    return (
        <div className="min-h-[calc(100vh-136px)]">
        <Helmet>
          <title>Toy Market | All Toy Details </title>
        </Helmet>
        <div className="mt-5 md:mt-10">
          <div className=" capitalize text-2xl pt-10 pb-7 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            All Toys
          </div>
          <hr className="w-1/4 h-1 mx-auto bg-blueGray-200 border-0 rounded dark:bg-gray-700" />
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
         <div>
         <div className=" overflow-hidden sm:overflow-y-auto sm:overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
               SL
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Toy Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Sub Category
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Available Quantity
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                {" "}
                Descriptions
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              >Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-y-auto overflow-x-hidden">
          {SearchName?.map((ToyList, index) => (
             
             <tr className="hover:bg-gray-50 overflow-y-auto cursor-pointer">
             <th className="gap-3 px-6 py-4 font-normal text-gray-900">
             <div className="font-medium text-gray-700">{index+1}</div>
             </th>
             <td className="px-4 py-4">{ToyList.SellerName}</td>
             <td className="px-4 py-4">{ToyList.ToyName}</td>
             <td className="px-4 py-4">{ToyList.SubCategory}</td>
             <td className="px-4 py-4">
             £{ToyList.Price}
             </td>
             <td className="px-4 py-4">{ToyList.AvailableQuantity}</td>
             <td className="px-4 py-4">
               <div className="flex gap-2">
                 <div className="text-sm">
                   <div className="text-gray-700">{ToyList.DetailDescription}</div>
                 </div>
               </div>
             </td>
             <td className="px-4 py-4">
               <div className="inline-flex rounded-xl">
               <Link to={`/singleToyDetails/${ToyList._id}`}>
              <button className="btn   bg-orange-100 py-1 px-3 focus:outline-none  hover:bg-orange-200">
                View Details
              </button>
            </Link>
               </div>
             </td>
           </tr>
             ))
             }


          </tbody>
        </table>
      </div>
         </div>



          </div> 
          </div>
        
            
        </div>
    );
};

export default AllOfToy;