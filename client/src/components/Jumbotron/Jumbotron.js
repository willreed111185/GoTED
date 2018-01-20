import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: '10%', width:'100%', backgroundColor: 'transparent', color:'white'}} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
