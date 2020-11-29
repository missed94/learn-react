import React from "react";
import classes from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {photosType} from "../../types/types";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


const Header:React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({isAuth, photos, loginName, logout}) => {

    let defaultPhotoUrl = "https://lumpics.ru/wp-content/uploads/207/11/Programmyi-dlya-sozdaniya-avatarok.png"

    return (
        <header className={classes.headerComponent}>
            <img
                src="https://image.similarpng.com/very-thumbnail/2020/07/Whatsapp-logo-design-on-transparent-background-PNG.png" alt=""/>
            <div className={classes.login__container}>
                {isAuth
                    ? <div className={classes.headerLogin__wrapper}>
                        <div className={classes.headerAvatar__wrapper}>
                            <img className={classes.photo}
                                 src={photos?.small || defaultPhotoUrl}
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


let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    loginName: state.auth.login,
    photos: state.auth.photos,
})

export default connect(mapStateToProps, {
    logout,
}) (Header);





type MapStateToPropsType = {
    isAuth: boolean,
    photos: photosType | null,
    loginName: string | null,
}

type MapDispatchToPropsType = {
    logout: () => void
}
