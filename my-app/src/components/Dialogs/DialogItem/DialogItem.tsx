import React from "react";
import classes from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";


type propsType = {
    id: number,
    name: string
}

const Dialog: React.FC<propsType> = ({id, name}) => {
    return (
        <li className={classes.dialogComponent}>
            <NavLink to={`/dialogs/${id}`} className={classes.link} activeClassName={classes.active}>
                <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
                {name}
            </NavLink>
        </li>
    )
}

export default Dialog