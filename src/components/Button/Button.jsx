import React from 'react'

import styles from './Button.module.scss';

const Button = props => {

    return(
        <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
}

export default Button