import * as React from "react";
import { Component } from "react";
import { ITile } from "../../../Board/Row/Tile/Tile";
import PropCard from "./PropCard/PropCard";
import "./PlayerTabBody.css";
export interface PlayerTabBodyProps {
   props: ITile[];
}

const colorOrder = [
   "brown",
   "blue",
   "pink",
   "orange",
   "red",
   "yellow",
   "green",
   "purple",
   "destination",
   "company",
];

const arrangeProps = (props: ITile[]) => {
   return colorOrder.map((color) =>
      props.filter((prop) => prop.color === color || prop.type === color)
   );
};

const PlayerTabBody: React.SFC<PlayerTabBodyProps> = ({ props }) => {
   const arrangedProps = React.useMemo(() => arrangeProps(props), [props]);
   console.log(arrangedProps);
   return (
      <div className="player-tab-body">
         {arrangedProps
            .filter((x) => x.length)
            .map((colorSet) => (
               <div className="card-row">
                  {colorSet.map((prop) => (
                     <PropCard {...prop}></PropCard>
                  ))}
               </div>
            ))}
      </div>
   );
};

export default PlayerTabBody;
