import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productName: "",
};

const searchedProduct = createSlice({
  name: "searchedProduct",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.productName = action.payload;
    },
  },
});

export const searchedProductReducer = searchedProduct.reducer;
export const searchedProductActions = searchedProduct.actions;
