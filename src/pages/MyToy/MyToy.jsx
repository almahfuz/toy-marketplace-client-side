import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyToyTab from "./MyToyTab";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const MyToy = () => {
  // const { user } = useContext(AuthContext);
  const [myToyTab, setMyToyTab] = useState([]);
  const [deletedToy, setDeletedToy] = useState([]);

  useEffect(() => {
    fetch("https://toy-market-sever-omega.vercel.app/alltoy")
      .then((res) => res.json())
      .then((data) => setMyToyTab(data));
  }, []);

  const handleDelete = _id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://toy-market-sever-omega.vercel.app/mytoy/${_id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {

                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been deleted.',
                            'success'
                        )
                        const remaining = deletedToy.filter(toy => toy._id !== _id);
                        setDeletedToy(remaining);
                    }
                })
          

        }
    })
}
  return (
    <div>
        <Helmet>
        <title>Toy Market | My Toy </title>
      </Helmet>
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
              <MyToyTab
                key={myToyTab._id}
                myToyTab={myToyTab}
                handleDelete={handleDelete}
              ></MyToyTab>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
