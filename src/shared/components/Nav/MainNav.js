import React, {useState} from "react";
import MainHeader from "./MainHeader";
import {Link} from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNav.css";

const MainNav = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
      {drawerIsOpen ? (
        <SideDrawer>
          <nav className='main-nav__drawer-nav'>
            <NavLinks />
          </nav>
        </SideDrawer>
      ) : null}
      <MainHeader>
        <button className='main-nav__menu-btn' onClick={openDrawer}>
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
