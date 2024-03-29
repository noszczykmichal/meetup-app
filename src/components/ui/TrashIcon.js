import PropTypes from "prop-types";
import { useContext } from "react";

import classes from "./TrashIcon.module.css";
import FavoritesContext from "../../store/favorites-context";

function TrashIcon({ clicked }) {
  const { totalFavorites } = useContext(FavoritesContext);
  let attachedClasses = [classes.container];

  if (!totalFavorites) {
    attachedClasses = [classes.container, classes["container--inactive"]];
  }
  return (
    <button
      type="button"
      className={attachedClasses.join(" ")}
      onClick={clicked}
      disabled={!totalFavorites}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fillRule="evenodd"
        clipRule="evenodd"
        className={classes.container__icon}
        alt="delete favorite meetups"
      >
        <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z" />
      </svg>
    </button>
  );
}

TrashIcon.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default TrashIcon;
