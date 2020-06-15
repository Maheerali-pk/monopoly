import * as React from "react";
import { Component } from "react";
import { IPiece } from "../PiecesData";
import "./Piece.css";

export interface PieceProps {
   piece: IPiece;
   size: "small" | "medium" | "big";
}
const sizeObject = {
   small: 80,
   medium: 130,
   big: 200,
};
const Piece: React.SFC<PieceProps & { playerid?: number }> = ({
   piece,
   size,
   playerid,
}) => {
   return (
      <img
         className={`piece ${size} piece-${playerid}`}
         data-playerid={playerid}
         src={require(`../../../../../Images/pieces/${piece.name}.png`)}
      />
   );
};

export default Piece;
