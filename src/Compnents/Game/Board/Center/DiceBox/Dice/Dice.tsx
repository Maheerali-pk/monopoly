import * as React from "react";
import { Component } from "react";
import { GameContext } from "../../../../../../Contexts/GameContext";
import "./Dice.css";

export interface DiceProps {
   roll: number;
}
const dotPatters = [
   [[50, 50]],
   [
      [50, 33],
      [50, 66],
   ],
   [
      [50, 20],
      [50, 50],
      [50, 80],
   ],
   [
      [33, 33],
      [33, 66],
      [66, 33],
      [66, 66],
   ],
   [
      [25, 25],
      [25, 75],
      [75, 25],
      [75, 75],
      [50, 50],
   ],
   [
      [33, 20],
      [33, 50],
      [33, 80],
      [66, 20],
      [66, 50],
      [66, 80],
   ],
];
const Dice: React.SFC<DiceProps> = ({ roll }) => {
   console.log(roll);
   let myPattern = dotPatters[roll - 1];
   return (
      <div className="dice">
         {[...Array(roll)].map((_, i) => {
            const [x, y] = myPattern[i];
            return (
               <div
                  className="dot"
                  style={{ left: `${x}%`, top: `${y}%` }}
               ></div>
            );
         })}
      </div>
   );
};

export default Dice;
