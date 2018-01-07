import React from "react";
import { customListItemStyle } from "../../styles"


export const ListItem = props =>
  <li className="list-group-item" style={customListItemStyle}>
    {props.children}
  </li>;
