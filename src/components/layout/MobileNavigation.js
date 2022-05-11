import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MobileNavigation.module.css";
import TrashIcon from "../ui/TrashIcon";

function MobileNavigation(props) {
  const favoritesCtx = useContext(FavoritesContext);
  let attachedClasses = [classes["mobile-navbar"]];
  if (props.show) {
    attachedClasses = [
      classes["mobile-navbar"],
      classes["mobile-navbar--active"],
    ];
  }

  return (
    <nav className={attachedClasses.join(" ")}>
      <ul className={classes["mobile-navbar__items"]}>
        <li className={classes["mobile-navbar__item"]}>
          <Link to="/" onClick={props.linkClicked}>
            All Meetups
          </Link>
        </li>
        <li className={classes["mobile-navbar__item"]}>
          <Link to="/new-meetup" onClick={props.linkClicked}>
            Add New Meetup
          </Link>
        </li>
        <li className={classes["mobile-navbar__item"]}>
          <Link to="/favorites" onClick={props.linkClicked}>
            My Favorites
          </Link>
          <div className={classes["mobile-navbar__item--badge"]}>
            <p>{favoritesCtx.totalFavorites}</p>
          </div>
          <TrashIcon clicked={props.trashIconClicked} />
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavigation;
