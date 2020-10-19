import React from "react";
import classes from "./LoginForm.module.scss"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormControls";
import {required} from "../../../utils/validators/validators";


const LoginForm = (props) => {
    return (
        <div className={classes.loginFormComponent}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        type="text"
                        name={"email"}
                        placeholder={"email"}
                        component={Input}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field
                        type="password"
                        name={"password"}
                        placeholder={"password"}
                        component={Input}
                        validate={[required]}
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