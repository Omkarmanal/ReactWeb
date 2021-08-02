import React from "react";
import "./Navbar.css";
import {Nav, NavLink, Bars, NavMenu} from '../components/NavbarElements'

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src="https://www.mercedes-benz.co.in/passengercars/_jcr_content/logo.noscale.cloudsvg.imageLogo.20180312094632.svg" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink className="name1" to="/Limousine" activeStyle>
          Limosine
        </NavLink>
        <NavLink className="name2" to="/SUV Range" activeStyle>
        SUV Range
        </NavLink>
        <NavLink className="name3" to="/Coupés" activeStyle>
        Coupés
        </NavLink>
      </NavMenu>
      <NavLink to="/">
        <img className="navamg" src="https://1000logos.net/wp-content/uploads/2020/03/AMG-emblem-500x281.jpg" />
      </NavLink>
    </Nav>
  );
};

export default Navbar;
