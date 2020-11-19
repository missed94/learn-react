import React, {FC} from "react";
import classes from "./LoginForm.module.scss"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormControls";
import {required} from "../../../utils/validators/validators";
import {loginFormValuesType} from "../../../types/types";



type loginOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm:FC<InjectedFormProps<loginFormValuesType,loginOwnPropsType> & loginOwnPropsType> = ({error, handleSubmit, captchaUrl}) => {
    return (
        <div className={classes.loginFormComponent}>
            <form className={classes.login__form} onSubmit={handleSubmit}>
                {/*{createField("email", "email",[required], Input)}*/}
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

const LoginReduxForm = reduxForm<loginFormValuesType,loginOwnPropsType>({
    form: 'login'
})(LoginForm)

export default LoginReduxForm