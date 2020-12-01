import React from "react";
import classes from "./Login.module.scss"
import LoginReduxForm, {loginFormValuesType} from "./LoginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {login} from "../../redux/reducers/auth-reducer";


const Login: React.FC = () => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)

    const dispatch = useDispatch();

    const handleLogin = (formData: loginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) return <Redirect to={"/profile"}/>

    return (
        <div className={classes.loginComponent}>
            <h1>LOGIN</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={handleLogin}/>
        </div>

    )
}


export default Login

