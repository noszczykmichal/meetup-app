import classes from './Backdrop.module.css'

function Backdrop(props){
    let attachedClasses=[classes.backdrop]
    
    if(props.show){
        attachedClasses=[classes.backdrop, classes.open];
    }

    return <div className={attachedClasses.join(' ')} onClick={props.clicked}></div>
}

export default Backdrop;
