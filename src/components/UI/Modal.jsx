import classes from "./modal.module.css"
import ReactDom from "react-dom"

const Backdrop = props => {
return <div className={classes.container} onClick={props.onClose}/>
}

const ModalOverlay = props => {
    return <div className={classes.overlay}>
        <div className={classes['inner-content']}>{props.children}</div>

    </div>

}
const Modal = (props) => {
  return (
    <>
     {ReactDom.createPortal(<Backdrop onClose = {props.onCLose}/> , document.getElementById("overlay"))}
     {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , document.getElementById("overlay"))}
    </>
  )
}

export default Modal
