import { useState } from "react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Backdrop from "../ui/Backdrop";
import MobileNavigation from "./MobileNavigation";
import Modal from "../ui/Modal";

function Layout(props) {
  const [backdropVisible, toggleBackdrop] = useState(false);
  const [mobileNavbarVisible, toggleNavbar] = useState(false);
  const [modalVisible, toggleModal] = useState(false);

  function backdropHandler() {
    toggleBackdrop(false);
    toggleModal(false);
    toggleNavbar(false);
  }

  function navbarHandler() {
    toggleNavbar((prevState) => !prevState);
    toggleBackdrop(prevState=> !prevState);
  }

  function modalHandler() {
    toggleModal(true);
    toggleBackdrop(true);
    toggleNavbar(false);
  }

  return (
    <div>
      <Backdrop clicked={backdropHandler} show={backdropVisible} />
      <MainNavigation toggleClicked={navbarHandler} trashIconClicked={modalHandler}/>
      <MobileNavigation
        linkClicked={navbarHandler}
        show={mobileNavbarVisible}
        trashIconClicked={modalHandler}
      />
      <Modal show={modalVisible} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
