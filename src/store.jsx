import { configureStore } from "@reduxjs/toolkit";
import navigationdReducer from "./features/navigation/navigationSlice";
import drinkreducer from "./features/drink/drinkSlice";
import foodreducer from "./features/food/foodSlice";

const store = configureStore({
  reducer: {
    drink: drinkreducer,
    food: foodreducer,
    navigation: navigationdReducer,
  },
});

export default store;
