import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    isToggle: false,
  },
  reducers: {
    toggleButton: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { toggleButton } = navigationSlice.actions;
export default navigationSlice.reducer;
