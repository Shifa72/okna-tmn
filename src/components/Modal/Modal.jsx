import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react'
import './Modal.css'

export default function Modal({ children, open }) {

    const dialog = useRef()
    

    useEffect(() => {
        if (open && !dialog.current.open) {
            dialog.current.showModal();
        } else if (!open && dialog.current.open) {
            dialog.current.close();
        }
    }, [open]);


    

    return createPortal(
        <dialog key="modal-dialog" ref={dialog}>{ children }</dialog>,
        document.getElementById('modal')
    )
}