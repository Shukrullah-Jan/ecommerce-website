import { configureStore } from "@reduxjs/toolkit";

import { cartProductsReducer } from "../features/cartProducts/cartProductsSlice";
import { searchedProductReducer } from "../features/searchedProductSlice/searchedProductSlice";


export const store = configureStore({
  reducer: {
    cartProducts: cartProductsReducer,
    searchedProduct: searchedProductReducer,
  },
});
