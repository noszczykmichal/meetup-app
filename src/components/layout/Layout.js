import { useState } from "react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Backdrop from "../ui/Backdrop";
import MobileNavigation from "./MobileNavigation";
import Modal from "../ui/Modal";

function Layout(props) {
  const [mobileNavbarVisible, toggleNavbar] = useState(false);

  function navbarHandler() {
    toggleNavbar(prevState=> prevState? false : true);
  }

  return (
    <div>
      <Backdrop clicked={navbarHandler} show={mobileNavbarVisible}/>
      <MainNavigation toggleClicked={navbarHandler} />
      <MobileNavigation linkClicked={navbarHandler} show={mobileNavbarVisible}/>
      <Modal/>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
