import PropTypes from "prop-types";

import classes from "./MobileNavigation.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";

function MobileNavigation({ show, linkClicked, trashIconClicked }) {
  let attachedClasses = [classes["mobile-navbar"]];
  if (show) {
    attachedClasses = [
      classes["mobile-navbar"],
      classes["mobile-navbar--active"],
    ];
  }

  return (
    <nav className={attachedClasses.join(" ")}>
      <NavigationItems
        onLinkClick={linkClicked}
        onTrashIconClick={trashIconClicked}
      />
    </nav>
  );
}

MobileNavigation.propTypes = {
  show: PropTypes.bool.isRequired,
  linkClicked: PropTypes.func.isRequired,
  trashIconClicked: PropTypes.func.isRequired,
};

export default MobileNavigation;
