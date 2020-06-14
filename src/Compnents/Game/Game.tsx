import * as React from "react";
import { Component } from "react";
import PlayersBar from "./PlayersBar/PlayersBar";
import Board from "./Board/Board";
import "./Game.css";
import {
   GameContext,
   initalGameState,
   GameReducer,
} from "../../Contexts/GameContext";

export interface GameProps {}

const Game: React.SFC<GameProps> = () => {
   console.log("game rendered");
   const memoizedReducer = React.useCallback(GameReducer, []);
   const [state, dispatch] = React.useReducer(memoizedReducer, initalGameState);
   return (
      <div id="game">
         <GameContext.Provider value={[state, dispatch]}>
            <Board />
            <PlayersBar></PlayersBar>
         </GameContext.Provider>
      </div>
   );
};

export default React.memo(Game);
