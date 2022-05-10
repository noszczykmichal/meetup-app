import { useState, useContext } from "react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Backdrop from "../ui/Backdrop";
import MobileNavigation from "./MobileNavigation";
import Modal from "../ui/Modal";
import FavoritesContext from "../../store/favorites-context";

function Layout(props) {
  const [backdropVisible, toggleBackdrop] = useState(false);
  const [mobileNavbarVisible, toggleNavbar] = useState(false);
  const [modalVisible, toggleModal] = useState(false);
  const favoriteCtx = useContext(FavoritesContext);

  function hideComponentsHandler() {
    toggleBackdrop(false);
    toggleModal(false);
    toggleNavbar(false);
  }

  function navbarHandler() {
    toggleNavbar((prevState) => !prevState);
    toggleBackdrop((prevState) => !prevState);
  }

  function modalHandler() {
    toggleModal(true);
    toggleBackdrop(true);
    toggleNavbar(false);
  }

  function clearHandler() {
    favoriteCtx.clearFavorite();
    hideComponentsHandler();
  }

  return (
    <div>
      <Backdrop clicked={hideComponentsHandler} show={backdropVisible} />
      <MainNavigation
        toggleClicked={navbarHandler}
        trashIconClicked={modalHandler}
      />
      <MobileNavigation
        linkClicked={navbarHandler}
        show={mobileNavbarVisible}
        trashIconClicked={modalHandler}
      />
      <Modal
        show={modalVisible}
        confirmButtonHandler={clearHandler}
        cancelButtonHandler={hideComponentsHandler}
      />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
