import React, { useState } from "react";
import * as GiIcons from "react-icons/gi";
import * as VscIcons from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const [fixScroll, setFixScroll] = useState(false);

  const burgerToggle = () => {
    setBurger(!burger);
  };

  const fixedScroll = () => {
    if (window.scrollY >= 20) {
      setFixScroll(true);
    } else {
      setFixScroll(false);
    }
  };

  window.addEventListener("scroll", fixedScroll);
  return (
    <div
      className={
        fixScroll
          ? "sm:bg-[#3D1C05]/[.9] fixed w-full z-20 md:h-fit md:bg-[#3D1C05]/[.9] md:duration-300 shadow-custome"
          : "fixed w-full z-10 md:duration-300"
      }
    >
      <div className="sm:flex sm:items-center sm:justify-between sm:px-5 sm:py-4 sm:text-white md:px-[50px] lg:[100px]">
        <div>
          <a href="#">
            <h3 className="sm:text-lg sm:font-semibold font-[Kalam] md:text-2xl lg:text-3xl tracking-widest uppercase">
              Street
            </h3>
          </a>
        </div>

        <ul
          className={
            burger
              ? "sm:bg-[#3D1C05] sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-screen sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-0 sm:ease-in sm:duration-300"
              : "sm:bg-[#3D1C05] sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-screen sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-full sm:ease-in sm:duration-300 md:translate-x-0 md:relative md:flex-row md:h-fit md:bg-transparent md:w-fit md:gap-10 "
          }
        >
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            {/* <VscIcons.VscTriangleRight color="#0EE6B7" /> */}
            <Link to={"/"} className="hover:text-[#0EE6B7] font-['Marcellus']">
              Home
            </Link>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            {/* <VscIcons.VscTriangleRight color="#0EE6B7" /> */}
            <Link
              to={"/about"}
              className="hover:text-[#0EE6B7] font-['Marcellus']"
            >
              About
            </Link>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            {/* <VscIcons.VscTriangleRight color="#0EE6B7" /> */}
            <Link
              to={"/our-menu"}
              className="hover:text-[#0EE6B7] font-['Marcellus']"
            >
              Menu
            </Link>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            {/* <VscIcons.VscTriangleRight color="#0EE6B7" /> */}
            <Link
              to={"/contact"}
              className="hover:text-[#0EE6B7] font-['Marcellus']"
            >
              Contact
            </Link>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            {/* <VscIcons.VscTriangleRight color="#0EE6B7" /> */}
            <Link
              to={"http://muhnuraqsalaminullah.me/"}
              target={"_blank"}
              className="hover:text-[#0EE6B7] font-['Marcellus']"
            >
              Portfolio
            </Link>
          </li>
        </ul>

        <GiIcons.GiHamburgerMenu
          onClick={burgerToggle}
          className="z-10 md:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
