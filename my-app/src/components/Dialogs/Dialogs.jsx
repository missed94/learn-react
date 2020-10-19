import React from "react";
import classes from "./Dialogs.module.scss";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageReduxForm from "./MessageForm/MessageForm";


const Dialogs = (props) => {

    let dialogsArray = props.dialogs.map((dialog, i) => {
        return <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>
    })

    let messagesArray = props.messages.map((message, i) => {
        return <Message key={message.id}  message={message.message} />
    })



    const addNewMessage = (values) => {
        props.onSendMessage(values.message)
    }

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
                <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;