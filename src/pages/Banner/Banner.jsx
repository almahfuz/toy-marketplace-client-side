import React from "react";
import BackgroundBanner from "../../assets/images/LoginBanner.jpg";
const Banner = () => {
  return (
    <div className="max-h-screen">
      <section
        className="bg-blend-darken bg-cover bg-center  max-h-screen h-screen text-white py-20 px-10  md:py-48   lg:py-48 object-fill  opacity-2"
        style={{ backgroundImage: `url(${BackgroundBanner})` }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">
            Welcome to Decode Construction
          </h1>
          <p className="text-xl mb-12">
            “Our experiences are the building blocks of the future hewn out of
            the granite of the present.” ― Craig D. Lounsbrough
          </p>
          {/* <a
              href="#"
              className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
            >
              Demo
            </a> */}
        </div>
      </section>
    </div>
  );
};

export default Banner;
