import React, {FC} from "react";
import classes from "./Contact.module.scss"

type propsType = {
    contactTitle: string,
    contactValue: string
}

const Contact: FC<propsType> = ({contactTitle, contactValue}) => {


    return (
        <li className={classes.contactComponent}>
            {contactTitle}: <a href={contactValue}>{contactValue}</a>
        </li>
    )
}

export default Contact