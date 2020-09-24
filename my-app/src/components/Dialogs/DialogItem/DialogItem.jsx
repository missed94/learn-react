import React from "react";
import classes from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    return (
        <li className={classes.dialogComponent}>
            <NavLink to={`/dialogs/${props.id}`} className={classes.link} activeClassName={classes.active}>
                <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
                {props.name}
            </NavLink>
        </li>
    )
}

export default Dialog