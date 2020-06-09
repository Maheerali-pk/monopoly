import * as React from "react";
import { Component } from "react";
import Tile, { ITile } from "./Tile/Tile";

export interface RowProps {
   id: number;
   tiles: ITile[];
}

const Row: React.SFC<RowProps> = ({ id, tiles }) => {
   return (
      <div className="row" id={`row-${id}`}>
         {tiles.map((tile) => (
            <Tile {...tile}></Tile>
         ))}
      </div>
   );
};

export default Row;
