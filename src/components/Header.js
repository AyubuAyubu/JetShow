import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Nav";

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="">
          <h1>Jet001</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            HOME
          </NavLink>
          <NavLink to="/addjet" activeStyle>
            ADD JET
          </NavLink>
          <NavLink to="/ourjet" activeStyle>
            OUR JET
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Header;
