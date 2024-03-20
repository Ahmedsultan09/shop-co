import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment(state) {
      state.quantity += 1;
    },
    increment(state) {
      state.quantity -= 1;
    },
  },
});

export const actions = cartSlice.actions;

export default cartSlice;
