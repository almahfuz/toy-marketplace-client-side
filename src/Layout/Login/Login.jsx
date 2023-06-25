import React from "react";
import "./login.css";
import Sociallogin from "../socialLogin/Sociallogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div class="h-screen flex">
        <div
          class="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center"
        >
          <div
            class=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          ></div>
          <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 class="text-white font-bold text-4xl font-sans">
              {" "}
              Decode construction To
            </h1>
            <p class="text-white mt-1">
              {" "}
              The Expert in anything was once a be beginner-
            </p>
          </div>
        </div>
        <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div class="w-full px-8 md:px-32 lg:px-24">
            <form class="bg-white rounded-md shadow-2xl p-5">
              <h1 class="text-gray-800 font-bold text-2xl mb-3">Log in</h1>
              <div class="flex items-center border-2 mb-5 py-2 px-3 rounded-2xl">
               
                <input
                  id="email"
                  class=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div class="flex items-center border-2 mb-5 py-2 px-3 rounded-2xl ">
               
                <input
                  class="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Login
              </button>

              <div class="flex justify-between mt-4">
                <a
                  href="#"
                  class="text-sm ml-2 hover:text-blue-500 cursor-pointer"
                >
                  Don't have a account?
                  <span>
                    {" "}
                    <Link
                      to="/signUp"
                      className="text-sm hover:text-blue-500 cursor-pointer "
                    >
                      Registered here
                    </Link>{" "}
                  </span>
                </a>
              </div>
              <Sociallogin></Sociallogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
