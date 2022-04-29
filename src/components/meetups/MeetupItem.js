import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.data.id);

  function toggleFavStatusHandler() {
    if (itemIsFavorite === false) {
      return favoritesCtx.addFavorite(props.data);
    } else {
      return favoritesCtx.removeFavorite(props.data.id);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.data.image} alt={props.data.description} />
        </div>
        <div className={classes.content}>
          <h3>{props.data.title}</h3>
          <address>{props.data.address}</address>
          <p>{props.data.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
