import * as React from "react";
import { Component } from "react";
import { GameContext } from "../../../../../Contexts/GameContext";
import Piece from "../../../PlayersBar/PlayerTab/Piece/Piece";
export type TileType =
   | "colored-property"
   | "destination"
   | "company"
   | "chance"
   | "community-chest"
   | "jail"
   | "go-to-jail"
   | "free-parking"
   | "just-visiting"
   | "go"
   | "income-tax";

export type TileColor =
   | "brown"
   | "orange"
   | "pink"
   | "blue"
   | "red"
   | "green"
   | "purple"
   | "yellow";
export type RentType = [number, number, number, number, number];
export interface ITile {
   id: number;
   name: string;
   type: TileType;
   active?: boolean;
   allRents?: RentType;
   currentRent?: number;
   housePrice?: number;
   owner?: number;
   color?: TileColor;
   price?: number;
   taxValue?: number;
   isMotergaged?: boolean;
   isCardSelected?: boolean;
}
const Tile: React.SFC<ITile> = ({ color, price, name, id, isMotergaged }) => {
   const [gameState, dispatchGame] = React.useContext(GameContext);
   const playersOnTile = gameState.players.filter(
      ({ position }) => position === id
   );
   return (
      <div
         style={{ filter: `grayscale(${isMotergaged ? 0.7 : 0})` }}
         className={`tile`}
         data-tileno={`${id}`}
      >
         {color && (
            <div
               className="tile-color"
               style={{ backgroundColor: color }}
            ></div>
         )}
         <div className="tile-name">{name}</div>
         {price && <div className="tile-price">{`$${price}`}</div>}
         <div className="pieces-cont">
            {playersOnTile.map((player) => (
               <Piece
                  playerid={player.id}
                  piece={player.piece}
                  size={"small"}
               ></Piece>
            ))}
         </div>
      </div>
   );
};

export default Tile;
