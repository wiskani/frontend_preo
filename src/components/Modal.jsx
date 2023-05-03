import React, {useContext, useRef, useEffect, useCallback} from "react";
import  ReactDOM  from "react-dom";
import AppContext from "../context/AppContext";
import { CSSTransition } from "react-transition-group";
import "../styles/Modal.scss";

const Modal = ({children}) => {
	const {openModal, setOpenModal}= useContext(AppContext)
	const nodeRef = useRef(null);

	const handleClose = ()=>{
		setOpenModal(false)
	}

	const escClose = useCallback((event)=>{
		if (event.keyCode === 27){
			setOpenModal(false)
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", escClose);

		return()=>{
			document.addEventListener("keydown", escClose);
		}
	}, [escClose])

	return (
		ReactDOM.createPortal(
				<CSSTransition
					in={openModal}
					timeout={500}
					classNames="modal"
					unmountOnExit
					nodeRef={nodeRef}
				>
				<div className="modal-background">
				<div className="modal" ref={nodeRef}>
					<button onClick={handleClose} className="button-close">
						x
					</button>
					{children}
				</div>

				</div>
				</CSSTransition>,
			document.getElementById('modal')
		)

	); 
}

export default Modal
