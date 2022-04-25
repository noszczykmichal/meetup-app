import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
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
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
