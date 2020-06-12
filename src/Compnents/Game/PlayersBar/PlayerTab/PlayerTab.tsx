import * as React from "react";
import { Component } from "react";
import { IPiece } from "./PiecesData";
import "./PlayerTab.css";
import Piece from "./Piece/Piece";
import Collapse from "../../../Helpers/Collapse/Collapse";
import PropCard from "./PlayerTabBody/PropCard/PropCard";
import { ITile } from "../../Board/Row/Tile/Tile";
import PlayerTabBody from "./PlayerTabBody/PlayerTabBody";
export interface IPlayer {
   name: string;
   id: number;
   props: ITile[];
   money: number;
   haveJailFreeCard: boolean;
   position: number;
   piece: IPiece;
}

const PlayerTab: React.SFC<IPlayer> = ({ name, money, piece, props }) => {
   const [isOpen, setIsOpen] = React.useState(false);
   return (
      <div className="player-tab">
         <div
            className="player-tab-head"
            onClick={() => {
               setIsOpen(!isOpen);
            }}
         >
            <div className="piece-wrapper">
               <Piece piece={piece} size={"medium"}></Piece>
            </div>
            <span className="player-name">{name}</span>
            <span className="player-money">${money}</span>
         </div>
         <Collapse isOpen={isOpen}>
            {<PlayerTabBody props={props}></PlayerTabBody>}
         </Collapse>
      </div>
   );
};

export default PlayerTab;
