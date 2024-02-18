import React from "react";

// <><><><><> import react router dom <><><><>
import { Link } from "react-router-dom";

// <><><><><> components <><><><>
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// <><><><><> image Items <><><><>
import {
  bgHome,
  bgKasar,
  imgCoffee1,
  imgCoffee2,
  imgCoffee3,
  imgCoffee4,
  imgFood1,
  imgFood2,
  imgFood3,
  imgFood4,
  imgIconCoffee,
  imgResto,
} from "../data/images";

// <><><><><> react icons <><><><>
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";

const Home = () => {
  return (
    <div>
      {/* <><><><> Banner Hero <><><><> */}
      <div
        className="w-full h-screen bg-slate-400 600 bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <h3 className="text-white font-[Kalam] sm:text-xl md:text-2xl lg:text-4xl">
          Welcome to Street
        </h3>
        <h1 className="text-white font-[Cabin] font-bold sm:text-3xl md:text-4xl lg:text-6xl mt-3 uppercase text-center">
          come and eat with us
        </h1>
        <p className="text-white font-[Lato] text-center sm:px-5 md:px-32 lg:px-80 sm:text-sm md:text-base lg:text-xl mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          pariatur corporis facere facilis architecto doloremque.
        </p>
        <Link to={"/our-menu"}>
          <button className="text-white font-[Lato] tracking-wider border border-white sm:py-3 sm:px-10 sm:text-sm md:text-base lg:text-xl rounded-md mt-10">
            Menu Here
          </button>
        </Link>
      </div>

      {/* <><><><> About Place <><><><> */}
      <div className="sm:px-5 sm:my-20 md:px-10 lg:px-20 md:flex md:justify-between md:items-center">
        <div className="md:w-[45%] overflow-hidden">
          <img src={imgResto} alt="" />
        </div>
        <div className="md:w-[45%]">
          <h3 className="text-[#3D1C05] font-[Kalam] font-bold sm:text-3xl md:text-4xl lg:text-6xl mb-1 sm:mt-5 md:mt-0">
            Welcome to Street
          </h3>
          <h4 className="uppercase font-[Cabin] font-bold sm:text-xl md:text-2xl lg:text-4xl sm:mb-3 md:mb-8">
            Discover our story
          </h4>
          <div>
            <p
              className="text-[#726D67] font-[Lato] sm:text-sm md:text-base lg:text-lg"
              style={{ lineHeight: "30px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              id quis aliquid doloremque quasi vero. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit.
            </p>
            <p
              className="text-[#726D67] font-[Lato] sm:text-sm md:text-base lg:text-lg sm:mt-3 md:mt-5"
              style={{ lineHeight: "30px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              id quis aliquid doloremque quasi vero.
            </p>
          </div>
          <button className="text-white bg-[#3D1C05] sm:py-3 sm:px-10 sm:text-sm md:text-base lg:text-lg rounded-md sm:mt-5">
            Read More
          </button>
        </div>
      </div>

      {/* <><><><> Information Place <><><><> */}
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center mb-20 sm:flex sm:flex-col sm:gap-y-10 sm:py-20 md:flex-row md:justify-between md:px-20 lg:px-32"
        style={{ backgroundImage: `url(${bgKasar})` }}
      >
        <div className="flex flex-col items-center">
          <GiIcons.GiForkKnifeSpoon className="text-[70px] text-[#3D1C05]" />
          <p className="font-[Cabin] font-bold lg:text-4xl">100</p>
          <p className="font-[Lato] lg:text-xl">MENU</p>
        </div>
        <div className="flex flex-col items-center">
          <MdIcons.MdFavorite className="text-[70px] text-[#3D1C05]" />
          <p className="font-[Cabin] font-bold lg:text-4xl">100</p>
          <p className="font-[Lato] lg:text-xl">TOP RATED</p>
        </div>
        <div className="flex flex-col items-center">
          <HiIcons.HiUserGroup className="text-[70px] text-[#3D1C05]" />
          <p className="font-[Cabin] font-bold lg:text-4xl">100</p>
          <p className="font-[Lato] lg:text-xl">HAPPY CUSTOMERS</p>
        </div>
        <div className="flex flex-col items-center">
          <HiIcons.HiHome className="text-[70px] text-[#3D1C05]" />
          <p className="font-[Cabin] font-bold lg:text-4xl">100</p>
          <p className="font-[Lato] lg:text-xl">BRANCHES</p>
        </div>
      </div>

      {/* <><><><> Mini Gallery Our Menu <><><><> */}
      <div>
        <div className="mb-10">
          <h1 className="uppercase text-center font-['Marcellus'] text-[#3D1C05] sm:text-4xl md:text-5xl lg:text-6xl">
            Our sweet gallery
          </h1>
          <div className="flex justify-center gap-x-3">
            <div className="border-b border-[#3D1C05] sm:w-[20%]"></div>
            <img
              src={imgIconCoffee}
              className="sm:w-[25px] md:w-[30px] lg:w-[35px] relative top-2"
            />
            <div className="border-b border-[#3D1C05] sm:w-[20%]"></div>
          </div>
          <p className="font-['Montserrat'] text-[#3E3733] text-center tracking-wider sm:text-lg mt-5 sm:px-3 md:px-20 lg:px-48">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit nemo minus praesentium consequatur accusamus adipisci.
          </p>
        </div>

        <div className="sm:flex sm:flex-col sm:gap-y-5 md:flex-row md:gap-x-5 md:justify-between md:flex-wrap mb-20">
          <div className="sm:w-full sm:h-[250px] md:w-[48%] lg:w-[23%] lg:h-[250px] overflow-hidden">
            <img src={imgCoffee1} alt="" className="w-full" />
          </div>
          <div className="sm:w-full sm:h-[250px] md:w-[48%] lg:w-[23%] lg:h-[250px] overflow-hidden">
            <img src={imgCoffee2} alt="" className="w-full" />
          </div>
          <div className="sm:w-full sm:h-[250px] md:w-[48%] lg:w-[23%] lg:h-[250px] overflow-hidden">
            <img src={imgCoffee3} alt="" className="w-full" />
          </div>
          <div className="sm:w-full sm:h-[250px] md:w-[48%] lg:w-[23%] lg:h-[250px] overflow-hidden">
            <img src={imgCoffee4} alt="" className="w-full" />
          </div>
          <div className="sm:w-full sm:h-[250px] md:w-[48%] lg:w-[23%] lg:h-[250px] overflow-hidden">
            <img src={imgFood1} alt="" className="w-full" />
          </div>
          <div className="sm:w-full sm:h-[250px] md:w-[48%] lg:w-[23%] lg:h-[250px] overflow-hidden">
            <img src={imgFood2} alt="" className="w-full" />
          </div>
          <div className="sm:w-full sm:h-[250px] md:w-[48%] lg:w-[23%] lg:h-[250px] overflow-hidden">
            <img src={imgFood3} alt="" className="w-full" />
          </div>
          <div className="sm:w-full sm:h-[250px] md:w-[48%] lg:w-[23%] lg:h-[250px] overflow-hidden">
            <img src={imgFood4} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
