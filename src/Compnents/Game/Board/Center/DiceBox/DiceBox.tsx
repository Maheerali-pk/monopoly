import * as React from "react";
import { Component } from "react";
import { GameContext } from "../../../../../Contexts/GameContext";
import Dice from "./Dice/Dice";
import "./DiceBox.css";
export interface DiceBoxProps {}

const DiceBox: React.SFC<DiceBoxProps> = () => {
   const [{ lastRoll }, dispatchGame] = React.useContext(GameContext);
   return (
      <div id="dice-box">
         {lastRoll && lastRoll.map((x) => <Dice roll={x}></Dice>)}
      </div>
   );
};

export default DiceBox;
