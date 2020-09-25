import React from "react";
import classes from "./Dialogs.module.scss";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsArray = props.dialogsPage.dialogs.map((dialog, i) => {
        return <Dialog key={i} name={dialog.name} id={dialog.id}/>
    })

    let messagesArray = props.dialogsPage.messages.map((message, i) => {
        return <Message key={i} id={message.id} message={message.message}/>
    })



    let textareaEl = React.createRef()

    let onMessageChange = () => {
        let valueText = textareaEl.current.value;//получаем значение инпута
        props.updateMessageText(valueText);//запускаем функцию в качестве аргумента значение из инпута
    }

    let sendMessage = () => {
        props.sendMessage()
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

                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessage} ref={textareaEl} className={classes.textarea}/>
                <button onClick={sendMessage} className={classes.btn}>Send message</button>


            </div>

        </div>
    )
}

export default Dialogs;