import React from "react";
import classes from "./Dialogs.module.scss";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsArray = props.state.dialogs.map((dialog, i) => {
        return <Dialog key={i} name={dialog.name} id={dialog.id}/>
    })

    let messagesArray = props.state.messages.map((message, i) => {
        return <Message key={i} id={message.id} message={message.message} alignSelf={message.alignSelf}/>
    })

    let textareaEl = React.createRef()

    let getValue = () => {
        let valueText = textareaEl.current.value;
        alert(valueText)
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

                <textarea ref={textareaEl} className={classes.textarea}></textarea>
                <button onClick={getValue} className={classes.btn}>Send message</button>


            </div>

        </div>
    )
}

export default Dialogs;