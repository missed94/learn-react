import React, {FC} from "react";
import classes from "./LoginForm.module.scss"
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormControls";
import {required} from "../../../utils/validators/validators";


type loginOwnPropsType = {
    captchaUrl: string | null
}

export type loginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string
}

type loginFormValuesTypeKeys = Extract<keyof loginFormValuesType, string>


const LoginForm:FC<InjectedFormProps<loginFormValuesType,loginOwnPropsType> & loginOwnPropsType> = ({error, handleSubmit, captchaUrl}) => {
    return (
        <div className={classes.loginFormComponent}>
            <form className={classes.login__form} onSubmit={handleSubmit}>
                {createField<loginFormValuesTypeKeys>(
                    null,
                    "email",
                    "email",
                    "text",
                    [required],
                    Input
                )}
                {createField<loginFormValuesTypeKeys>(
                    null,
                    "password",
                    "password",
                    "password",
                    [required],
                    Input
                )}
                <label>
                    {createField<loginFormValuesTypeKeys>(
                        null,
                        undefined,
                        "rememberMe",
                        "checkbox",
                        [],
                        Input
                    )}
                    <span>remember me</span>
                </label>
                {captchaUrl && <div className={classes.captcha__wrapper}>
                    <img src={captchaUrl} alt="captcha"/>
                    {createField<loginFormValuesTypeKeys>(
                        null,
                        "enter symbols",
                        "captcha",
                        "text",
                        [],
                        Input
                    )}
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

const LoginReduxForm = reduxForm<loginFormValuesType,loginOwnPropsType>({
    form: 'login'
})(LoginForm)

export default LoginReduxForm