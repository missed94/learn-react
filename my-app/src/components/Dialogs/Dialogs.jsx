import React from "react";
import classes from "./Dialogs.module.scss";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsArray = props.dialogs.map((dialog, i) => {
        return <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>
    })

    let messagesArray = props.messages.map((message, i) => {
        return <Message key={message.id}  message={message.message} />
    })


    let onMessageChange = (e) => {
        let valueText = e.target.value;//получаем значение инпута
        props.onMessageChange(valueText);

    }

    let onSendMessage = () => {
        props.onSendMessage()
    }

    if (!props.isAuth) return <Redirect to="/login"/>

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

                <textarea onChange={onMessageChange} value={props.newMessage} className={classes.textarea}/>
                <button onClick={onSendMessage} className={classes.btn}>Send message</button>


            </div>

        </div>
    )
}

export default Dialogs;