import * as React from "react";
import { Component } from "react";
import "./PlayersBar.css";
import { GameContext } from "../../../Contexts/GameContext";
import PlayerTab from "./PlayerTab/PlayerTab";

export interface PlayersBarProps {}

const PlayersBar: React.SFC<PlayersBarProps> = () => {
   const [gameState, dispatch] = React.useContext(GameContext);

   return (
      <div id="players-bar">
         {gameState.players.map((player) => (
            <PlayerTab {...player}></PlayerTab>
         ))}
      </div>
   );
};

export default PlayersBar;
