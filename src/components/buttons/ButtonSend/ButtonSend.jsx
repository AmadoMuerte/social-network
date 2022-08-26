import React from 'react';

import classes from './ButtonSend.module.css';

function ButtonSend(props) {
    return (
        <button className={classes.ButtonSend}>{props.message}</button>
    );
}

export default ButtonSend;