import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Nav";

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="">
          <h1>JetShow</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/addjet" activeStyle>
            Add Jet
          </NavLink>
          <NavLink to="/ourjet" activeStyle>
            Our Jet
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;
