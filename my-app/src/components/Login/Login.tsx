import React, {FC} from "react";
import classes from "./Login.module.scss"
import LoginReduxForm, {loginFormValuesType} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type mapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type mapDispatchPropsType = {
    login: (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: null | string) => void
}

const Login: FC<mapStatePropsType & mapDispatchPropsType> = ({login, isAuth, captchaUrl}) => {

    const onSubmit = (formData: loginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) return <Redirect to={"/profile"}/>

    return (
        <div className={classes.loginComponent}>
            <h1>LOGIN</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>

    )
}


const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)

