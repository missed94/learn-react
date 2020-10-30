import React from "react";
import classes from "./Login.module.scss"
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";


const Login = ({login, isAuth, captchaUrl}) => {



    const onSubmit = (formData) => {
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


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)

