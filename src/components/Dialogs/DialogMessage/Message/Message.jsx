import React from 'react';

import classes from './Message.module.css';

function Message({message}) {
    return (
        <div>{message}</div>
    );
}

export default Message;