import React from 'react'

import styles from './Modal.module.scss';

import cvES from './CV-Marcos Iorio.pdf'
import cvEN from './CV_Marcos-Iorio-en.pdf'


const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}/>
  }
  
  const Modal = (props) => {
    return(
        <>
            <Backdrop onConfirm={props.onConfirm}/>
            <div className={styles.modal}>
            <header className={styles.header}>
                <div className={styles.close} onClick={props.onConfirm}>×</div>
                <h2>Select the CV language:</h2>
            </header>
            <div className={styles.content}>
                <a href={cvEN} target="_blank" onClick={props.onConfirm}>English</a>
                <a href={cvES} target="_blank" onClick={props.onConfirm}>Spanish</a>
            </div>
        </div>
        </>
        
    );
  }

export default Modal;