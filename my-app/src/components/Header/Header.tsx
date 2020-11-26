import React from "react";
import classes from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {photosType} from "../../types/types";

type propsType = {
    isAuth: boolean,
    photos: photosType,
    loginName: string,
    logout: () => void
}

const Header:React.FC<propsType> = ({isAuth, photos, loginName, logout}) => {

    let defaultPhotoUrl = "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"

    return (
        <header className={classes.headerComponent}>
            <img
                src="https://image.similarpng.com/very-thumbnail/2020/07/Whatsapp-logo-design-on-transparent-background-PNG.png"/>
            <div className={classes.login__container}>
                {isAuth
                    ? <div className={classes.headerLogin__wrapper}>
                        <div className={classes.headerAvatar__wrapper}>
                            <img className={classes.photo}
                                 src={photos.small || defaultPhotoUrl}
                                 alt=""/>
                            <span className={classes.loginName}>{loginName}</span>
                        </div>

                        <div className={classes.headerBtn__wrapper}>
                            <button className={classes.headerBtn} onClick={logout}>logout</button>
                        </div>
                    </div>
                    : <NavLink className={classes.login__link} to={`/login`}> Login
                    </NavLink>}
            </div>
        </header>
    );
};


export default Header;