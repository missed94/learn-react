import React from "react";
import classes from "./Contact.module.scss"

const Contact = ({contactTitle, contactValue}) => {


    return (
        <li className={classes.contactComponent}>
            {contactTitle}: <a href={contactValue}>{contactValue}</a>
        </li>
    )
}

export default Contact