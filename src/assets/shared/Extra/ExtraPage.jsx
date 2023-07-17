import React from "react";
import Banner1 from "../../images/LoginBanner.jpg";
const ExtraPage = () => {
  return (
    <div>
      <div className="z-30 mt-10 relative items-center justify-center w-full h-full overflow-auto">
        <div
          className="inset-0 h-screen bg-cover bg-center object-contain"
          style={{ backgroundImage: `url(${Banner1})` }}
        ></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
        <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
          <div
            className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center object-contain"
            style={{ backgroundImage: `url(${Banner1})` }}
          >
            <div className="grid grid-cols-12 gap-1">
              <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                <div className="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                  <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                    Decode construction toy point
                  </p>
                </div>

                <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                <div className="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                  <div className="p-8">
                    <p className="items-center text-white text-xs md:text-sm lg:text-xl mb-4">
                      Decode construction toy are truly amazing platform.
                      Impressive toy collections here.
                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraPage;
