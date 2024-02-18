import React, { useState } from "react";

// <><><><><> Import React Router Dom <><><><>
import { Link } from "react-router-dom";

// <><><><><> Import React Icons <><><><>
import * as GiIcons from "react-icons/gi";
import * as HiIcons from "react-icons/hi2";

// <><><><><> Import Redux <><><><>
import { useDispatch, useSelector } from "react-redux";

// <><><><><> Import Redux Toolkit Slice <><><><>
import { toggleButton } from "../../features/navigation/navigationSlice";

const Navbar = () => {
  // <><><><><> implemented useDispatch <><><><>
  const dispatch = useDispatch();

  // <><><><><> Get Data and State with useSelector <><><><>
  const drinkSelectionItem = useSelector((state) => state.drink.selectedItems);
  const foodSelectionItem = useSelector((state) => state.food.selectedItems);

  // <><><><> initialization Personal State <><><><>
  const [burger, setBurger] = useState(false);
  const [fixScroll, setFixScroll] = useState(false);

  // <><><><> function handle get total Item <><><><>
  const getTotalItems = () => {
    const foodTotalItems = foodSelectionItem.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const drinkTotalItems = drinkSelectionItem.reduce(
      (total, item) => total + item.quantity,
      0
    );

    return foodTotalItems + drinkTotalItems;
  };

  //  <><><><> function handle button cancel shopping card <><><><>
  const shoppingCardToggle = () => {
    dispatch(toggleButton());
  };

  //  <><><><> function handle burger menu  <><><><>
  const burgerToggle = () => {
    setBurger(!burger);
  };

  //  <><><><> function control scroll header <><><><>
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
          : "fixed w-full z-20 md:duration-300"
      }
    >
      <div className="sm:flex sm:items-center sm:justify-between sm:px-5 sm:py-4 sm:text-white md:px-[50px] lg:[100px]">
        <div>
          <a href="#">
            <h3 className="sm:text-xl sm:font-semibold font-[Kalam] md:text-2xl lg:text-3xl tracking-widest uppercase">
              Street
            </h3>
          </a>
        </div>

        <ul
          className={
            burger
              ? "sm:bg-[#3D1C05] sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-screen sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-0 sm:ease-in sm:duration-300 z-20"
              : "sm:bg-[#3D1C05] sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-screen sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-full sm:ease-in sm:duration-300 md:translate-x-0 md:relative md:flex-row md:h-fit md:bg-transparent md:w-fit md:gap-10 z-20"
          }
        >
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            {/* <VscIcons.VscTriangleRight color="#0EE6B7" /> */}
            <Link to={"/"} className="hover:text-[#0EE6B7] font-['Marcellus']">
              Home
            </Link>
          </li>
          {/* <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            <Link
              to={"/about"}
              className="hover:text-[#0EE6B7] font-['Marcellus']"
            >
              About
            </Link>
          </li> */}
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            {/* <VscIcons.VscTriangleRight color="#0EE6B7" /> */}
            <Link
              to={"/our-menu"}
              className="hover:text-[#0EE6B7] font-['Marcellus']"
            >
              Menu
            </Link>
          </li>
          {/* <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            <Link
              to={"/contact"}
              className="hover:text-[#0EE6B7] font-['Marcellus']"
            >
              Contact
            </Link>
          </li> */}
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base">
            {/* <VscIcons.VscTriangleRight color="#0EE6B7" /> */}
            <Link
              to={"https://muhnuraqsalaminullah-v2.vercel.app/"}
              target={"_blank"}
              className="hover:text-[#0EE6B7] font-['Marcellus']"
            >
              Portfolio
            </Link>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:hidden sm:items-center sm:gap-x-2 md:border-0 md:py-0 sm:text-xs md:text-sm lg:text-base lg:flex">
            <button onClick={shoppingCardToggle} className="flex relative">
              <HiIcons.HiOutlineShoppingCart className="text-2xl" />
              {getTotalItems() > 0 && (
                <div className="bg-red-600 w-4 h-4 rounded-full absolute right-[-5px] top-[-3px] overflow-hidden">
                  <p className="text-xs text-center">{getTotalItems()}</p>
                </div>
              )}
            </button>
          </li>
        </ul>

        <div className="sm:flex sm:items-center gap-x-5 md:hidden">
          <button onClick={shoppingCardToggle} className="flex relative z-10">
            <HiIcons.HiOutlineShoppingCart className="text-2xl" />
            {getTotalItems() > 0 && (
              <div className="bg-red-600 w-4 h-4 rounded-full absolute right-[-5px] top-[-3px] overflow-hidden">
                <p className="text-xs text-center">{getTotalItems()}</p>
              </div>
            )}
          </button>

          <GiIcons.GiHamburgerMenu
            onClick={burgerToggle}
            className="z-20 text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
