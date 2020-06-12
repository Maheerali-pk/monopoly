import * as React from "react";
import { Component } from "react";
import { ITile } from "../../../../Board/Row/Tile/Tile";
import "./PropCard.css";
const PropCard: React.SFC<ITile> = ({
   name,
   active,
   color,
   isCardSelected,
   isMotergaged,
}) => {
   const filterString = `brightness(${isCardSelected ? 1 : 0.9} grayscale(${
      isMotergaged ? 0.5 : 0
   }))`;
   return (
      <div
         style={{ borderColor: color, filter: filterString }}
         className="prop-card"
      >
         {name}
      </div>
   );
};

export default PropCard;
