import initialData from "../api/dicesData";
import actionTypes from "../constants/actionTypes";

const allDicesReducer = (state = initialData, action) => {
  switch (action.type) {
    case actionTypes.ALL_DICES:
      return action.payload;
    default:
      return state;
  }
};

export default allDicesReducer;
