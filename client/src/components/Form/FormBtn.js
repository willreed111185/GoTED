import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor: "Transparent", border:"none" }} className="btn btn-success">
    {props.children}
  </button>;
