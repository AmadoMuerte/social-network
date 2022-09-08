import React from 'react';

import classes from './ButtonSend.module.css';

function ButtonSend(props) {
    return (
        <button
            className={classes.ButtonSend}
            onClick={props.addPost}>
            {props.description}
        </button>
    );
}

export default ButtonSend;