import React from "react";
import classes from "./Dialogs.module.scss";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsArray = props.dialogsPage.dialogs.map((dialog, i) => {
        return <Dialog key={i} name={dialog.name} id={dialog.id}/>
    })

    let messagesArray = props.dialogsPage.messages.map((message, i) => {
        return <Message key={i} id={message.id} message={message.message}/>
    })




    let onMessageChange = (e) => {
        let valueText = e.target.value;//получаем значение инпута
        let action = onMessageChangeActionCreator(valueText);
        props.dispatch(action);//запускаем метод dispatch в качестве аргумента тип action и значение из инпута в свойство newText
    }

    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action)
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

                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessage} className={classes.textarea}/>
                <button onClick={sendMessage} className={classes.btn}>Send message</button>


            </div>

        </div>
    )
}

export default Dialogs;