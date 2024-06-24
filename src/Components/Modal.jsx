import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';


const Dialog = styled.dialog`
    border: 5px solid #fb8500;
    border-radius: 5px;
    background-color: #ffb703;

    &::backdrop {
        background-image: linear-gradient(
        45deg,  #8ecae6, #219ebc, #023047);
        opacity: 0.75;
    }
`

const Button = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    background-color: #fb8500; 

    &:hover {
        background-color: #8ecae6;
    }
`


const Modal = forwardRef(function modal({ handleReset }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <Dialog ref={dialog}>
            <h2>Congrats!</h2>
            <h3>You successfully completed the puzzle!</h3>
            <form method="dialog">
                <Button autoFocus>Close</Button>
            </form>
        </Dialog>,
        document.getElementById('modal')
    );
});

export default Modal;
