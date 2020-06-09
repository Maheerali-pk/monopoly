import * as React from "react";
import { Component } from "react";
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
}
const Tile: React.SFC<ITile> = ({ color, price, name }) => {
   return (
      <div className="tile">
         {color && (
            <div
               className="tile-color"
               style={{ backgroundColor: color }}
            ></div>
         )}
         <div className="tile-name">{name}</div>
         {price && <div className="tile-price">{`$${price}`}</div>}
      </div>
   );
};

export default Tile;
