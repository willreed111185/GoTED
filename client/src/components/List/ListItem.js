import React from "react";

const customListItemStyle = {
    backgroundColor     : 'transparent',
    border				: '0px',
    color				: 'white',
};

export const ListItem = props =>
  <li className="list-group-item" style={customListItemStyle}>
    {props.children}
  </li>;
