import React from "react";

// <><><><><> Import react icons <><><><>
import * as MdIcons from "react-icons/md";

// <><><><><> Import React Redux <><><><>
import { useDispatch } from "react-redux";

// <><><><><> Import Redux Toolkit Slice <><><><>
import { addToCard } from "../../features/drink/drinkSlice";

const DrinkMenu = ({ drink }) => {
  // <><><><><> implemented useDispatch <><><><>
  const dispatch = useDispatch();

  // <><><><><> function handle AddCart <><><><>
  const handleAddCard = () => {
    dispatch(
      addToCard({
        id: drink.id,
        title: drink.title,
        price: drink.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className="sm:mb-8 md:flex lg:w-1/2">
      <div className="sm:w-full sm:h-[250px] md:w-[300px] md:h-[150px] rounded-md overflow-hidden">
        <img src={drink.image} className="w-full" />
      </div>
      <div className="sm:p-5 md:py-0 leading-8 flex justify-between w-full">
        <div>
          <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-xl">
            {drink.title}
          </p>
          <p className="font-['Lato'] text-[#726D67]">{drink.desc}</p>
          <p className="font-['Lato'] font-bold text-[#3E3733] sm:text-lg">
            Rp. {drink.price}
          </p>
        </div>
        <button
          onClick={handleAddCard}
          className="border border-[#4DA656] w-fit h-fit p-1 rounded-full"
        >
          <MdIcons.MdAddShoppingCart size={24} color={"#4DA656"} />
        </button>
      </div>
    </div>
  );
};

export default DrinkMenu;
