import React, {FC} from "react"
import classes from "./FormControls.module.scss"
import Field, {WrappedFieldProps} from "redux-form";
import {fieldValidatorType} from "../../../utils/validators/validators";


type formControlType = (Element: typeof React.Component | string) => (params: WrappedFieldProps) => React.ReactNode
const FormControl: formControlType = (Element) => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={
            hasError
                ? `${classes.formControl} ${classes.error}`
                : `${classes.formControl}`
        }
        >
            <div>
                <Element {...input} {...props}/>
            </div>
            {hasError
                ? <p className={classes.errorMessage}>{error}</p>
                : null
            }
        </div>
    )
}

export const Textarea = FormControl("textarea");
export const Input = FormControl("input");

/*
export function createField<formKeysType extends string>(placeholder: string | undefined,
                            name: formKeysType,
                            validators: Array<fieldValidatorType>,
                            component: formControlType,
                            props = {},
                            text = ""
) {
    return <div>
        <Field placeholder={placeholder}
               validate={validators}
               component={component}
               {...props}
        />{text}
    </div>
}
*/
