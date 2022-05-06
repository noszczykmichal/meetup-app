import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MainNavigation.module.css";
import TrashIcon from "../ui/TrashIcon";

function MainNavigation(props) {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <div className={classes.mobilenav_toggle} onClick={props.toggleClicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites{" "}
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
              <TrashIcon/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
