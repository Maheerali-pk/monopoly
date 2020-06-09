import * as React from "react";
import { Component } from "react";
import PlayersBar from "./PlayersBar/PlayersBar";
import Board from "./Board/Board";
import {
   GameContext,
   initalGameState,
   GameReducer,
} from "../../Contexts/GameContext";

export interface GameProps {}

const Game: React.SFC<GameProps> = () => {
   const [state, dispatch] = React.useReducer(GameReducer, initalGameState);
   return (
      <>
         <GameContext.Provider value={[state, dispatch]}>
            <Board />
            <PlayersBar></PlayersBar>
         </GameContext.Provider>
      </>
   );
};

export default Game;
