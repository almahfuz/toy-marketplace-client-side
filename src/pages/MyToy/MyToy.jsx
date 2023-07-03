import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyToyTab from "./MyToyTab";

const MyToy = () => {
  // const { user } = useContext(AuthContext);
  const [myToyTab, setMyToyTab] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((data) => setMyToyTab(data));
  }, []);
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
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
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-y-auto">
            {myToyTab.map((myToyTab) => (
              <MyToyTab key={myToyTab._id} myToyTab={myToyTab}></MyToyTab>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
