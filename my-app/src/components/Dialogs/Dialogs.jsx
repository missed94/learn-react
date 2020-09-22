import React from "react";
import classes from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";




const Dialog = (props) => {
    return (
        <li className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`} className={classes.link} activeClassName={classes.active}>
                {props.name}
            </NavLink>
        </li>
    )
}

const Message = (props) => {
    return (
        <li className={classes.message}>
            {props.message}
        </li>
    )
}


let dialogsData = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Oleg"},
    {id: 3, name: "Oxana"},
    {id: 4, name: "Lisa"},
];

let messagesData = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you"},
    {id: 3, message: "What is your health"},
]



const Dialogs = (props) => {
    return (
        <div className={classes.dialogsComponent}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogs__list}>
                    <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                </ul>

            </div>
            <div className={classes.messages}>
                <ul className={classes.messages__list}>
                    <Message id={messagesData[0].id} message={messagesData[0].message}/>
                    <Message id={messagesData[1].id} message={messagesData[1].message}/>
                    <Message id={messagesData[2].id} message={messagesData[2].message}/>
                </ul>
            </div>
        </div>
    )
}

export default Dialogs;