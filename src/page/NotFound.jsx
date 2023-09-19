import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-[Cabin] sm:text-5xl md:text-7xl lg:text-9xl">404</h1>
      <h2 className="font-[Kalam] sm:text-xl md:text-3xl lg:text-5xl">
        Page Not Found
      </h2>
      <Link to={"/"}>
        <button className="text-white bg-[#3D1C05] sm:py-3 sm:px-10 sm:text-sm md:text-base lg:text-lg rounded-md sm:mt-5">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
