import actionTypes from "../constants/actionTypes";


const selectedDiceReducer = (state = {isHeld: false, value: undefined}, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_DICE:
      return action.payload;
    default:
      return state;
  }
};

export default selectedDiceReducer;
