import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Confettie from "react-confetti";
import { gameStatusAction, allDicesAction } from "./actions";
import Die from "./components/Die";
import "./index.css";

const App = () => {
  const allDices = useSelector((state) => state.allDices);
  const selectedDice = useSelector((state) => state.selectedDice);
  const gameStatus = useSelector((state) => state.gameStatus);
  const dispatch = useDispatch();

  const dices = allDices.map((die) => (
    <Die key={die.id} id={die.id} isHeld={die.isHeld} value={die.value} />
  ));

  function updateDices() {
    dispatch(allDicesAction(getNewDices()));
  }

  function getNewDices() {
    let newDices = [];

    if (gameStatus) {
      dispatch(gameStatusAction(false));
    }

    if (!selectedDice.isHeld) {
      for (let i = 0; i < 10; i++) {
        const rand = Math.floor(Math.random() * 6) + 1;
        newDices.push({ id: i + 1, value: rand, isHeld: false });
      }
    } else {
      for (let i = 0; i < 10; i++) {
        const rand = Math.floor(Math.random() * 6) + 1;
        if (!allDices[i].isHeld)
          newDices.push({ id: i + 1, value: rand, isHeld: false });
        else newDices.push(allDices[i]);
      }
    }
    return newDices;
  }

  // get full window width and height
  const w = window.innerWidth;
  const h = window.innerHeight;

  return (
    <div className="main-container">
      {gameStatus && <Confettie width={w} height={h} numberOfPieces={300} opacity={0.7}/>}
      <div>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      {gameStatus && <h2>You Won!!!</h2>}   
      <div className="dices-cont">{dices}</div>
      <div className="btn-cont">
        <button onClick={updateDices}>{gameStatus ? "Restart" : "Roll"}</button>
      </div>
    </div>
  );
};

export default App;
