import React from 'react';

import DialogsItem from "./DialogsItem/DialogsItem";
import SearchPanel from "../../SearchPanel/SearchPanel";

import classes from './DialogPerson.module.css';

function DialogPerson({dialogsData}) {

    let dialogsElements = dialogsData.map(dialog => {
        return <DialogsItem id={dialog.id} name={dialog.name} key={dialog.id} />
    });

    return (
        <div className={classes.items}>
            <SearchPanel />
            {dialogsElements}
        </div>
    );
}

export default DialogPerson;