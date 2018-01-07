import React from "react";
import "./List.css";
import { listStyle } from "../../styles"


export const List = ({ children }) => {
  return (
    <div className="list-overflow-container" style={listStyle}>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
