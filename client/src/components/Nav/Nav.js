import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top" style={{backgroundColor: 'white'}}>
    <div className="container-fluid">
      <div className="navbar-inverss">
        <a href="/" className="navbar-brand">
          GoTED
        </a>
        <a href="/talks" className="navbar-brand">
          Talks
        </a>
        <a href="/login" className="navbar-brand">
          Admin
        </a>
      </div>
    </div>
  </nav>;

export default Nav;
