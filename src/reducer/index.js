import { combineReducers } from "redux";
import allDicesReducer from "./allDicesReducer";
import gameStatusReducer from "./gameStatusReducer";
import selectedDiceReducer from "./selectedDiceReducer";

const allReducers = combineReducers({
  selectedDice: selectedDiceReducer,
  allDices: allDicesReducer,
  gameStatus: gameStatusReducer
});

export default allReducers;
