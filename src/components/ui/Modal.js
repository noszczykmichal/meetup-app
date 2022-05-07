import classes from "./Modal.module.css";

function Modal() {
  return (
    <div className={classes['modal-container']}>
      <div className={[classes['modal'], classes['modal--active']].join(' ')}>
      <div className={classes["modal__text"]}>
        <p>This will delete all you favorite meetups!</p>
        <p>Do you want to continue?</p>
      </div>
      <div className={classes["modal__actions"]}>
        <button className={[classes['modal__action'], classes['modal__action--confirm']].join(' ')}>YES</button>
        <button className={[classes['modal__action'], classes['modal__action--cancel']].join(' ')}>NO</button>
      </div>
    </div>
    </div>
  );
}

export default Modal;
