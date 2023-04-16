import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.products.push(action.payload);
    },
    removeItem: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const cartProductsReducer = cartProductsSlice.reducer;
export const cartProductsActions = cartProductsSlice.actions;
