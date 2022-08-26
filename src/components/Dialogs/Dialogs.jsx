import React from 'react';

import classes from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialogsItems__item + ' ' + classes.active}>
                    Adrey
                </div>
                <div className={classes.dialogsItems__item}>
                    Boris
                </div>
                <div className={classes.dialogsItems__item}>
                    Kiril
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.messages__item}>
                    привет
                </div>
                <div className={classes.messages__item}>
                    привет
                </div>
                <div className={classes.messages__item}>
                    привет
                </div>
            </div>
        </div>
    );
}

export default Dialogs;