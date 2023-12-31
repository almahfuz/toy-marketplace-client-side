import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sociallogin from "../socialLogin/Sociallogin";
import "./Singup.css";
import Swal from 'sweetalert2'
import { AuthContext } from "../../pages/Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const { registerCreateUser, ProfileUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleWithRegistration = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("Minimum 8 characters, at least 1 letter and 1 number");
      return;
    }
    if ((email, password)) {
      registerCreateUser(email, password)
        .then((result) => {
          console.log(result.user);
          ProfileUserInfo(displayName, photoURL)
            .then(() => {
              console.log("profile updated successfully ");
              setDisplayName(displayName);
              setPhotoURL(photoURL);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'create a new user ',
                showConfirmButton: false,
                timer: 1500
              })
              // navigate("/");
            })
            .catch((err) => {
              console.log(err.message);
            });

          navigate("/");
          setDisplayName(displayName);
          //  console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
   
  };

  return (
    <div className="h-screen flex">
        <Helmet>
        <title>Toy Market | Sign up </title>
      </Helmet>
      <div
        className="hidden lg:flex w-full lg:w-1/2 login_img_section
      justify-around items-center"
      >
        <div
          className=" 
              bg-black 
              opacity-20 
              inset-0 
              z-0"
        ></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-sans">
            {" "}
            Decode construction Toy
          </h1>
          <p className="text-white mt-1">
            {" "}
            The Expert in anything was once a be beginner-
          </p>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form className="bg-white rounded-md shadow-2xl p-5">
            <h1 className="text-gray-800 font-bold text-2xl mb-3">Sign Up</h1>
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                onChange={(e) => setDisplayName(e.target.value)}
                className=" pl-2 w-full outline-none border-none"
                type="text"
                name="text"
                placeholder="Name"
              />
            </div>
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl ">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <p className="text-[10px] text-rose-700">{error}</p>
            </div>{" "}
            <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
              <input
                onChange={(e) => setPhotoURL(e.target.value)}
                className=" pl-2 w-full outline-none border-none"
                type="text"
                name="text"
                placeholder="Photo URL"
              />
            </div>
            <button
              onClick={handleWithRegistration}
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Sign Up
            </button>
            <div className="flex justify-between mt-3">
              <a
                href="#"
                className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
              >
                Already have an account?
                <span>
                  {" "}
                  <Link
                    to="/login"
                    className="text-sm hover:text-blue-500 cursor-pointer "
                  >
                    Log in
                  </Link>{" "}
                </span>
              </a>
            </div>
            <Sociallogin></Sociallogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
