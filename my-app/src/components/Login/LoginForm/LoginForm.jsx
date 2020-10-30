import React from "react";
import classes from "./LoginForm.module.scss"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormControls";
import {required} from "../../../utils/validators/validators";


const LoginForm = ({error, handleSubmit, captchaUrl}) => {
    return (
        <div className={classes.loginFormComponent}>
            <form className={classes.login__form} onSubmit={handleSubmit}>
                <div>
                    <Field
                        type="text"
                        name={"email"}
                        placeholder={"email"}
                        component={Input}
                    />
                </div>
                <div>
                    <Field
                        type="password"
                        name={"password"}
                        placeholder={"password"}
                        component={Input}
                    />

                </div>
                <label>
                    <Field
                        component={"input"}
                        type="checkbox"
                        name={"rememberMe"}
                    />

                    <span>remember me</span>
                </label>

                {captchaUrl && <div className={classes.captcha__wrapper}>
                    <img src={captchaUrl} alt="captcha"/>
                    <Field
                        type="text"
                        name={"captcha"}
                        placeholder={"enter symbols"}
                        component={Input}
                    />
                </div>}

                {
                    error && <div className={classes.form__summaryError}> {error} </div>
                }
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>

    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm