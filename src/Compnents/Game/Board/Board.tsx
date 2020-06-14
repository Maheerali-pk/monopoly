import * as React from "react";
import "./Board.css";
import { Component } from "react";
import { GameContext } from "../../../Contexts/GameContext";
import Tile from "./Row/Tile/Tile";
import Row from "./Row/Row";
import Center from "./Center/Center";
export interface BoardProps {}

const Board: React.SFC<BoardProps> = () => {
   const [{ tiles }, dispatch] = React.useContext(GameContext);
   const rows = [...Array(4)].map((x, i) => ({
      tiles: tiles.slice(10 * i, 10 * (i + 1)),
      id: i,
   }));
   console.log(rows);
   return (
      <div id="board">
         <Center></Center>
         {rows.map((row, i) => (
            <Row {...row}></Row>
         ))}
      </div>
   );
};

export default Board;
