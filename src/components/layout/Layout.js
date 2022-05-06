import { useState } from "react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Backdrop from "../ui/Backdrop";
import MobileNavigation from "./MobileNavigation";

function Layout(props) {
  const [mobileNavbarVisible, toggleNavbar] = useState(false);

  function navbarHandler() {
    toggleNavbar(prevState=> prevState? false : true);
  }

  return (
    <div>
      <Backdrop clicked={navbarHandler} show={mobileNavbarVisible}/>
      <MainNavigation toggleClicked={navbarHandler} />
      {mobileNavbarVisible && <MobileNavigation linkClicked={navbarHandler}/>}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
