import React from "react";
import "./List.css";

const customListStyle = {
    backgroundColor     : 'transparent',
    border				: '0px',
    color				: 'white',
};

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container" style={customListStyle}>
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
