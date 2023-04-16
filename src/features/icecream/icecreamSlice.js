import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

// ! notes
// ? every slice in redux toolkit is responding to the actions produced by the same slice by default
// ? it means unlike plain redux that every reducer can listen to all actions, in redux-toolkit reducers of a
// ? slice is responsible only for the actions of the same slice
// ? if you want a slice to listen to other actions of other slices, use extra reducers in your slice

const initialState = {
  numOfIcecream: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  // defining extra reducers (not recommended way)
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcecream--;
  //     },
  //   },
  // defining extra reducers (recommended way)
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },

});

export const icecreamReducer = icecreamSlice.reducer;
export const icecreamActions = icecreamSlice.actions;
