import React from "react";
import classes from "./Dialogs.module.scss";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageReduxForm, {dialogsFormValuesType} from "./MessageForm/MessageForm";
import {dialogsType, messagesType} from "../../types/types";


type dialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    onSendMessage: (id: number, message: string) => void
}

const Dialogs: React.FC<dialogsPropsType> = ({dialogs, messages, onSendMessage}) => {

    let dialogsArray = dialogs.map((dialog) => {
        return <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>
    })

    let messagesArray = messages.map((message, i) => {
        return <Message key={message.id} message={message.message}/>
    })

    const addNewMessage = (values: dialogsFormValuesType) => {
        onSendMessage(10, values.message)
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