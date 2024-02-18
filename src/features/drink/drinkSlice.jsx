import { createSlice } from "@reduxjs/toolkit";
import drinkList from "../../data/dataDrinkList";

const drinkSlice = createSlice({
  name: "drink",
  initialState: {
    drinkList: drinkList,
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
    removeDrinkFromCart: (state, action) => {
      const { id } = action.payload;
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== id
      );
    },
    tambahDrinkQuantity: (state, action) => {
      const { id } = action.payload;
      const selectedItem = state.selectedItems.find((item) => item.id === id);

      if (selectedItem) {
        selectedItem.quantity += 1;
      }
    },
    kurangiDrinkQuantity: (state, action) => {
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
  removeDrinkFromCart,
  tambahDrinkQuantity,
  kurangiDrinkQuantity,
  resetItem,
} = drinkSlice.actions;
export default drinkSlice.reducer;
