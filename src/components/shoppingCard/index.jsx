import React from "react";

// <><><><><> Import React Icons <><><><>
import * as Mdicons from "react-icons/md";

// <><><><><> redux <><><><>
import { useDispatch, useSelector } from "react-redux";

// <><><><><> Import Redux Toolkit Slice <><><><>
import { toggleButton } from "../../features/navigation/navigationSlice";
import {
  kurangiDrinkQuantity,
  removeDrinkFromCart,
  tambahDrinkQuantity,
} from "../../features/drink/drinkSlice";
import {
  kurangiFoodQuantity,
  removeFoodFromCart,
  tambahFoodQuantity,
} from "../../features/food/foodSlice";

const ShoppingCard = () => {
  // <><><><><> implemented useDispatch <><><><>
  const dispatch = useDispatch();

  // <><><><><> Get Data and State with useSelector <><><><>
  const isToggled = useSelector((state) => state.navigation.isToggle);
  const drinkSelectionItem = useSelector((state) => state.drink.selectedItems);
  const foodSelectionItem = useSelector((state) => state.food.selectedItems);
  const drinkList = useSelector((state) => state.drink.drinkList);
  const foodList = useSelector((state) => state.food.foodList);

  // <><><><><> Get Calculation Total Price <><><><>
  const getFoodPriceById = (foodId) => {
    const foodItem = foodList.find((item) => item.id === foodId);
    return foodItem ? foodItem.price : 0;
  };

  const getDrinkPriceById = (drinkId) => {
    const drinkItem = drinkList.find((item) => item.id === drinkId);
    return drinkItem ? drinkItem.price : 0;
  };

  const calculateTotalPrice = (foodList, drinkList) => {
    const foodTotalPrice = foodSelectionItem.reduce(
      (total, item) =>
        total + item.quantity * getFoodPriceById(item.id, foodList),
      0
    );

    const drinkTotalPrice = drinkSelectionItem.reduce(
      (total, item) =>
        total + item.quantity * getDrinkPriceById(item.id, drinkList),
      0
    );

    return foodTotalPrice + drinkTotalPrice;
  };

  // <><><><><> function Toggle Close Shopping Card <><><><>
  const shoppingCardToggle = (e) => {
    e.preventDefault();
    dispatch(toggleButton());
  };

  // <><><><><> fuction handle Remove Item From Shopping Card <><><><>
  const handleRemoveFromCart = (id, isFoodItem) => {
    if (isFoodItem) {
      dispatch(removeFoodFromCart({ id }));
    } else {
      dispatch(removeDrinkFromCart({ id }));
    }
  };

  // <><><><><> fuction handle More Item Quantity From Shopping Card <><><><>
  const handleTambahQuantity = (id, isFoodItem) => {
    if (isFoodItem) {
      dispatch(tambahFoodQuantity({ id }));
    } else {
      dispatch(tambahDrinkQuantity({ id }));
    }
  };

  // <><><><><> fuction handle Less Item Quantity From Shopping Card <><><><>
  const handleKurangiQuantity = (id, isFoodItem) => {
    if (isFoodItem) {
      dispatch(kurangiFoodQuantity({ id }));
    } else {
      dispatch(kurangiDrinkQuantity({ id }));
    }
  };

  // <><><><><> fuction handle Checkout fake <><><><>
  const handleCheckout = (e) => {
    e.preventDefault();
    dispatch({ type: "food/resetItem" });
    dispatch({ type: "drink/resetItem" });
    dispatch(toggleButton());
    alert("Buy Items Success!!");
  };

  return (
    <div
      className={
        isToggled
          ? "fixed bg-[#3D1C05]/[.3] top-0 right-0 z-30 w-full h-screen sm:flex sm:justify-center sm:items-center lg:justify-end"
          : "fixed w-full"
      }
    >
      <form
        className={
          isToggled
            ? "sm:w-[70%] sm:h-[60%] md:w-[50%] lg:w-[25%] lg:h-full bg-white shadow-xl shadow-black/[.5] sm:rounded-md lg:rounded-none flex flex-col justify-between sm:translate-x-0 sm:ease-in sm:duration-300"
            : "sm:w-[70%] sm:h-[60%] md:w-[50%] lg:w-[25%] lg:h-full bg-white shadow-xl shadow-black/[.5] sm:rounded-md lg:rounded-none flex flex-col justify-between sm:translate-x-full sm:ease-in sm:duration-300"
        }
      >
        <div className="sm:overflow-auto">
          <div className="sm:py-3 border-b border-[#3D1C05]/[.3] fixed bg-white w-full">
            <p className="sm:text-base md:text-lg text-center font-bold text-[#3D1C05]">
              Shopping Card
            </p>
          </div>

          <div className="pb-3 sm:pt-14">
            {/* items Food buy */}
            {foodSelectionItem.map((item) => (
              <div
                key={item.id}
                className="sm:flex sm:justify-between sm:items-center sm:py-3 border-b mx-3 border-[#3D1C05]/[.3]"
              >
                <div>
                  <p className="capitalize font-semibold text-[#3D1C05]">
                    {item.title}
                  </p>
                  <p className="font-medium text-sm">Rp. {item.price}</p>
                </div>
                <div className="sm:flex sm:gap-x-3">
                  <button
                    type="button"
                    onClick={() => handleKurangiQuantity(item.id, true)}
                    className="bg-[#3D1C05] text-white w-6 rounded"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    type="button"
                    onClick={() => handleTambahQuantity(item.id, true)}
                    className="bg-[#3D1C05] text-white w-6 rounded"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRemoveFromCart(item.id, true)}
                  >
                    <Mdicons.MdDelete className="text-2xl text-red-500" />
                  </button>
                </div>
              </div>
            ))}

            {/* items Food buy */}
            {drinkSelectionItem.map((item) => (
              <div
                key={item.id}
                className="sm:flex sm:justify-between sm:items-center sm:py-3 border-b mx-3 border-[#3D1C05]/[.3]"
              >
                <div>
                  <p className="capitalize font-semibold text-[#3D1C05]">
                    {item.title}
                  </p>
                  <p className="font-medium text-sm">Rp. {item.price}</p>
                </div>
                <div className="sm:flex sm:gap-x-3">
                  <button
                    type="button"
                    onClick={() => handleKurangiQuantity(item.id, false)}
                    className="bg-[#3D1C05] text-white w-6 rounded"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    type="button"
                    onClick={() => handleTambahQuantity(item.id, false)}
                    className="bg-[#3D1C05] text-white w-6 rounded"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRemoveFromCart(item.id, false)}
                  >
                    <Mdicons.MdDelete className="text-2xl text-red-500" />
                  </button>
                </div>
              </div>
            ))}

            <div className="px-5 py-3 border-b border-[#3D1C05]/[.3]">
              <p className="text-end">Rp. {calculateTotalPrice()}</p>
            </div>
          </div>

          <div>
            <div className="sm:flex sm:justify-between sm:items-center mx-3 mb-5 mt-2">
              <p className="w-[30%]">Name</p>

              <input
                type="text"
                placeholder="name..."
                className="border-b border-[#3D1C05]/[.2] w-[70%] py-2 pl-2 outline-none"
              />
            </div>
            <div className="sm:flex sm:justify-between sm:items-center mx-3 mb-5 mt-2">
              <p className="w-[30%]">Email</p>

              <input
                type="text"
                placeholder="email..."
                className="border-b border-[#3D1C05]/[.2] w-[70%] py-2 pl-2 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-3">
          <button
            type="button"
            onClick={handleCheckout}
            className="uppercase bg-[#3D1C05] w-full py-3 text-white rounded"
          >
            checkout
          </button>

          <button onClick={shoppingCardToggle} className="py-3">
            cencel
          </button>
        </div>
        {/* <form className="flex-col items-center bg-red-500 h-full"></form> */}
      </form>
    </div>
  );
};

export default ShoppingCard;
