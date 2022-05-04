import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MobileNavigation.module.css";

function MobileNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
          <Link to="/favorites">My Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MobileNavigation;
