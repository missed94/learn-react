import React from "react";
import classes from "./Message.module.scss"


type propsTypes = {
    message: string
}

const Message: React.FC<propsTypes> = ({message}) => {
    return (
        <li className={classes.message}>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
            <p>{message}</p>
        </li>
    )
}

export default Message