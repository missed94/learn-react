import React from "react";
import classes from "./Login.module.scss"
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>


    return (
        <div className={classes.loginComponent}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)

