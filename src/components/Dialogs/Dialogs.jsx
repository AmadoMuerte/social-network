import React from 'react';

import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import SearchPanel from "../SearchPanel/SearchPanel";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                <SearchPanel />

                <DialogsItem />
                <DialogsItem />
                <DialogsItem />

            </div>
            <div className={classes.messages}>

            </div>
        </div>
    );
}

export default Dialogs;