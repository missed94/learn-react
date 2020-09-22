import React from "react";
import classes from "./Dialogs.module.scss";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsArray = props.dialogs.map((dialog,i) => {
        return <Dialog key={i} name={dialog.name} id={dialog.id}/>
    })

    let messagesArray = props.messages.map((message,i) => {
        return <Message key={i} id={message.id} message={message.message}/>
    })

    return (
        <div className={classes.dialogsComponent}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogs__list}>
                    {dialogsArray}
                </ul>
            </div>
            <div className={classes.messages}>
                <ul className={classes.messages__list}>
                    {messagesArray}
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;