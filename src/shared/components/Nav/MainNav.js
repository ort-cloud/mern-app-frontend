import React from "react";
import MainHeader from "./MainHeader";
import {Link} from "react-router-dom";
import "./MainNav.css";
import NavLinks from "./NavLinks";

const MainNav = (props) => {
  return (
    <MainHeader>
      <button className='main-nav__menu-btn'>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className='main-nav__title'>
        <Link to='/'>YourPlaces</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNav;
