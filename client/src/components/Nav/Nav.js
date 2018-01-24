import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top" style={{backgroundColor: 'white'}}>
    <div className="container-fluid">
      <div className="navbar-inverse" size="sm-12">
        <a href="/" className="navbar-brand" size="sm-3">GoTED</a>
        <a href="/talks" className="navbar-brand" size="sm-3">Talks</a>
      </div>
      <div>
        <a href="/login" className="navbar-brand" size="sm-3">Admin</a>
        <a href="https://www.ted.com/" className="navbar-brand" size="sm-3">TED</a>
      </div>
    </div>
  </nav>;

export default Nav;
