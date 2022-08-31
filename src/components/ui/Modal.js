import { CSSTransition } from "react-transition-group";

import classes from "./Modal.module.css";

function Modal(props) {

  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames={{
        enter: '',
        enterActive: classes['modal--open'],
        exit: '',
        exitActive: classes['modal--closed']
      }}
      mountOnEnter
      unmountOnExit>
      <div className={classes.modal}>
        <div className={classes["modal__text"]}>
          <p>This will delete all your favorite meetups!</p>
          <p>Do you want to continue?</p>
        </div>
        <div className={classes["modal__actions"]}>
          <button
            className={[
              classes["modal__action"],
              classes["modal__action--confirm"],
            ].join(" ")}
            onClick={props.confirmButtonHandler}
          >
            YES
          </button>
          <button
            className={[
              classes["modal__action"],
              classes["modal__action--cancel"],
            ].join(" ")}
            onClick={props.cancelButtonHandler}
          >
            NO
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
