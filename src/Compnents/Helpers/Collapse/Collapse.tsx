import * as React from "react";
import { Component } from "react";
import "./Collapse.css";

export interface CollapseProps {
   isOpen: boolean;
}

const Collapse: React.SFC<CollapseProps> = ({ children, isOpen }) => {
   return (
      <div className={`${isOpen ? "opened" : "closed"} collapse`}>
         {children}
      </div>
   );
};

export default Collapse;
