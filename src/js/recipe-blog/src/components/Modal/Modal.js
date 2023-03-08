import React, { useState } from 'react';
import './Modal.scss';

function Modal(props) {
    return (
        <div className='modal'>
            <div className='modal__mask' />
            <div className='modal__body'>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;