import React from "react";
import MainHeader from "./MainHeader";
import {Link} from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNav.css";

const MainNav = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className='main-nav__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className='main-nav__menu-btn'>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className='main-nav__title'>
          <Link to='/'>YourPlaces</Link>
        </h1>
        <nav className='main-nav__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNav;
