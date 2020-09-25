import React from "react";
import classes from "./Message.module.scss"

const Message = (props) => {





    return (
        <li className={classes.message}>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
            <p>{props.message}</p>
        </li>
    )
}

export default Message