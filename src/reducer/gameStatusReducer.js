import actionTypes from "../constants/actionTypes";

const gameStatusReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.GAME_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default gameStatusReducer;
