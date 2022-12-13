import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import {
  selectedDiceAction,
  allDicesAction,
  gameStatusAction,
} from "../actions";

const Die = (props) => {
  const selectedDice = useSelector((state) => state.selectedDice);
  const allDices = useSelector((state) => state.allDices);

  const dispatch = useDispatch();

  useEffect(() => {
    // checks whether all dices are held
    let won = allDices.every((die) => die.isHeld);

    if (won) {
      dispatch(selectedDiceAction({ isHeld: false, value: undefined }));
      dispatch(gameStatusAction(true));
    }
  }, [allDices, dispatch]);

  function flipIsHeld() {
    let updatedDices = [];
    if (selectedDice.isHeld && selectedDice.value === props.value) {
      updatedDices = allDices.map((die) =>
        die.id === props.id ? { ...die, isHeld: true } : die
      );
    } else {
      dispatch(selectedDiceAction({ isHeld: true, value: props.value }));
      updatedDices = allDices.map((die) =>
        die.id === props.id ? { ...die, isHeld: true } : die
      );
    }
    dispatch(allDicesAction(updatedDices));
  }

  return (
    <div
      className={`die-cont ${props.isHeld ? "is-held" : ""}`}
      onClick={flipIsHeld}
    >
      <h3>{props.value}</h3>
    </div>
  );
};

export default Die;
