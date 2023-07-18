import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [SearchName, setSearchName] = useState([]);
  useEffect(() => {
    fetch(`https://toy-market-sever-almahfuz.vercel.app/alltoy`)
      .then((res) => res.json())
      .then((data) => setSearchName(data));
  }, []);

  return (
    <div className="mt-5 md:mt-10">
      <div className=" capitalize text-2xl pt-10 pb-7 text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Gallery
      </div>
      <hr className="w-1/4 h-1 mx-auto bg-blueGray-200 border-0 rounded dark:bg-gray-700" />

      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3  xl:gap-8">
              {SearchName?.slice(2,8).map((ToyList) => (
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={ToyList.ImagesURL}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {ToyList.ToyName}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
