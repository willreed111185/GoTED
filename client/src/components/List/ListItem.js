import React from "react";
import { listItemStyle } from "../../styles"


export const ListItem = props =>
  <li className="list-group-item" style={listItemStyle}>
    {props.children}
  </li>;
