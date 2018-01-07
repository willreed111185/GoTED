import React from "react";
import "./List.css";
import { customListStyle } from "../../styles"


export const List = ({ children }) => {
  return (
    <div className="list-overflow-container" style={customListStyle}>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
