import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 'auto', width:'100%', backgroundColor: 'transparent', color:'white'}} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
