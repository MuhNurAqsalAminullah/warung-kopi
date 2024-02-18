import React from "react";

// <><><><><> components <><><><>
import DrinkMenu from "../components/drinkMenu";
import FoodMenu from "../components/foodMenu";

// <><><><><> redux <><><><>
import { useSelector } from "react-redux";

// <><><><><> image Items <><><><>
import { bgOutMenu, imgIconCoffee } from "../data/images";

const OurMenus = () => {
  // <><><><><> Get Data State with useSelector <><><><>
  const drinkList = useSelector((state) => state.drink.drinkList);
  const foodList = useSelector((state) => state.food.foodList);

  return (
    <div>
      {/* <><><><> Banner Hero <><><><> */}
      <div>
        <div className="overflow-hidden fixed z-[-1] sm:h-[200px] md:h-[350px] lg:h-[450px] bg-[#848484]">
          <img
            className="sm:w-full md:relative md:bottom-[50px] lg:bottom-[200px]"
            src={bgOutMenu}
            alt="our-menu"
          />
        </div>
        <div className=" sm:h-[200px] sm:flex sm:justify-center sm:items-center md:h-[350px] lg:h-[450px]">
          <h1 className="uppercase text-white font-['Marcellus'] sm:text-5xl md:text-6xl lg:text-7xl">
            Our Menu
          </h1>
        </div>
      </div>

      {/* <><><><> List our Menu <><><><> */}
      <div className="bg-white">
        {/* <><><><> List Street Drink <><><><> */}
        <div>
          <div className="py-20">
            <h1 className="uppercase text-center font-['Marcellus'] text-[#3D1C05] sm:text-5xl md:text-6xl lg:text-7xl">
              street drink
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
              Reprehenderit nemo minus praesentium consequatur accusamus
              adipisci.
            </p>
          </div>

          <div className="sm:mx-5 md:mx-10 lg:mx-20 pb-20 lg:flex lg:flex-wrap">
            {drinkList.map((drink) => (
              <DrinkMenu key={drink.id} drink={drink} />
            ))}
          </div>
        </div>

        {/* <><><><> List Street Food <><><><> */}
        <div>
          <div className="py-20">
            <h1 className="uppercase text-center font-['Marcellus'] text-[#3D1C05] sm:text-5xl md:text-6xl lg:text-7xl">
              street food
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
              Reprehenderit nemo minus praesentium consequatur accusamus
              adipisci.
            </p>
          </div>

          <div className="sm:mx-5 md:mx-10 lg:mx-20 pb-20 lg:flex lg:flex-wrap">
            {foodList.map((food) => (
              <FoodMenu key={food.id} food={food} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenus;
