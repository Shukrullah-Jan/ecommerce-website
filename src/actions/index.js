import actionTypes from "../constants/actionTypes";

export const allDicesAction = (newDices) => {
  return {
    type: actionTypes.ALL_DICES,
    payload: newDices,
  };
};
export const selectedDiceAction = (dice) => {
  return {
    type: actionTypes.SELECTED_DICE,
    payload: dice,
  };
};
export const gameStatusAction = (won) => {
  return {
    type: actionTypes.GAME_STATUS,
    payload: won
  };
};
