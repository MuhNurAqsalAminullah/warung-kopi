import { createSlice } from "@reduxjs/toolkit";
import foodList from "../../data/dataFoodLink";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    foodList: foodList,
    selectedItems: [],
  },
  reducers: {
    addToCard: (state, action) => {
      const { id, title, price, quantity } = action.payload;
      const existingItem = state.selectedItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.selectedItems.push({ id, title, price, quantity });
      }
    },
    removeFoodFromCart: (state, action) => {
      const { id } = action.payload;
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== id
      );
    },
    tambahFoodQuantity: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.selectedItems.find((item) => item.id === id);

      if (selectedItem) {
        selectedItem.quantity += 1;
      }
    },
    kurangiFoodQuantity: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.selectedItems.find((item) => item.id === id);

      if (selectedItem) {
        selectedItem.quantity = Math.max(0, selectedItem.quantity - 1);

        if (selectedItem.quantity === 0) {
          state.selectedItems = state.selectedItems.filter(
            (item) => item.id !== id
          );
        }
      }
    },
    resetItem: (state) => {
      state.selectedItems = [];
    },
  },
});

export const {
  addToCard,
  removeFoodFromCart,
  tambahFoodQuantity,
  kurangiFoodQuantity,
  resetItem,
} = foodSlice.actions;
export default foodSlice.reducer;
