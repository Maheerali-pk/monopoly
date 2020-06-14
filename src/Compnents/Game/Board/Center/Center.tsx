import * as React from "react";
import { Component } from "react";
import { GameContext } from "../../../../Contexts/GameContext";
import "./Center.css";
import DiceBox from "./DiceBox/DiceBox";
import { IPiece } from "../../PlayersBar/PlayerTab/PiecesData";
import { IPlayer } from "../../PlayersBar/PlayerTab/PlayerTab";
import { allTiles } from "../../../../Contexts/BoardData";
import PlayersBar from "../../PlayersBar/PlayersBar";
export interface CenterProps {}
let colors = [
   "brown",
   "blue",
   "pink",
   "orange",
   "red",
   "yellow",
   "green",
   "purple",
];
const canBuildHouses = (player: IPlayer) => {
   return colors.some((color) => {
      const sameColorProps = allTiles.filter((x) => x.color === color);
      return sameColorProps.every((prop) => player.props.includes(prop));
   });
};

const Center: React.SFC<CenterProps> = () => {
   const [
      { currentTurn, players, canRollDice },
      dispatchGame,
   ] = React.useContext(GameContext);

   const currentPlayer = players[currentTurn];
   //Roll
   const roll = React.useCallback(() => {
      console.log("roll is dispatched");

      dispatchGame({ roll: "" });
   }, []);

   //End turn
   const endTurn = React.useCallback(() => {
      console.log("end turn is dispatched");
      dispatchGame({ "end-turn": "" });
   }, []);

   return (
      <div id="board-center">
         <div id="center-menu">
            <button disabled={!canRollDice} className={`btn`} onClick={roll}>
               Roll
            </button>

            <button className="btn" onClick={endTurn} disabled={canRollDice}>
               End turn
            </button>
            <button className="btn" disabled={!canBuildHouses(currentPlayer)}>
               Build Houses
            </button>
            <button
               className="btn"
               disabled={!(currentPlayer.props.length !== 0)}
            >
               Un/motergage Properties
            </button>
            <button className="btn">Trade</button>
            <DiceBox></DiceBox>
         </div>
      </div>
   );
};

export default Center;
