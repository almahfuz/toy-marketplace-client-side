import React from 'react';
import toy1 from '../../assets/images/toy-1.jpg'
import toy2 from '../../assets/images/toy-2.jpg'

const Silder = () => {
    return (
        <div className="mt-5 md:mt-10">
        <div className=" capitalize text-2xl pt-10 pb-7 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Feature
        </div>
        <hr className="w-1/4 h-1 mx-auto bg-blueGray-200 border-0 rounded dark:bg-gray-700"/>
  
      <div>
      <div className="mx-auto p-4 lg:p-10 bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-4  lg:p-10 rounded-2xl overflow-hidden bg-blue-50">
            <div className="flex items-center text-blue-500">
                <p className="text-sm font-bold uppercase">
                    Feature 1 & Feature 2  
                </p>
            </div>
            <div className="mt-12  flex justify-center items-center hover:scale-105 transform ease-in-out duration-150 transition-transform">
            <img className='w-full rounded-2xl object-cover h-auto' src={toy1} alt="" />
            </div>
        </div>

        <div className="p-4 lg:p-10 rounded-2xl overflow-hidden bg-blue-50">
            <div className="flex items-center text-blue-500">
                <p className="text-sm font-bold uppercase">
                    Feature 1 & Feature 2  bg-pink-50  text-pink-500
                </p>
            </div>
            <div className="mt-12 flex justify-center items-center hover:scale-105 transform ease-in-out duration-150 transition-transform">
            <img className='w-full rounded-2xl object-cover h-auto' src={toy2} alt="" />
            </div>
        </div>
       
      
    </div>
  </div>
      </div>
        </div>
    );
};

export default Silder;