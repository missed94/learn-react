import React from "react";
import classes from "./Header.module.scss"
import {NavLink} from "react-router-dom";

const Header = (props) => {

    let defaultPhotoUrl = "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"


    return (
        <header className={classes.headerComponent}>
            <img src="https://image.similarpng.com/very-thumbnail/2020/07/Whatsapp-logo-design-on-transparent-background-PNG.png"/>
            <div className={classes.login__container}>
                {props.isAuth
                    ? <div>
                        <img className={classes.photo}
                             src={defaultPhotoUrl}
                             alt=""/>
                        <span>{props.loginName}</span>
                        <button onClick={props.logout}>logout</button>
                    </div>
                    : <NavLink className={classes.login__link} to={`/login`}> Login
                    </NavLink>}
            </div>
        </header>
    );
};


export default Header;