import { CSSTransition } from 'react-transition-group';

import classes from './Backdrop.module.css'

function Backdrop(props) {
    return <CSSTransition
        in={props.show}
        timeout={300}
        classNames={{
            enter: '',
            enterActive: classes['backdrop--open'],
            exit: '',
            exitActive: classes['backdrop--closed']
        }}
        mountOnEnter
        unmountOnExit>
        <div className={classes.backdrop} onClick={props.clicked}></div>
    </CSSTransition>
}

export default Backdrop;
