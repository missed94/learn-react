import React from "react"
import classes from "./FormControls.module.scss"
import {WrappedFieldProps} from "redux-form";
import {Field} from "redux-form";
import {fieldValidatorType} from "../../../utils/validators/validators";


export type formControlType = (Element: typeof React.Component | string) => (params: WrappedFieldProps) => React.ReactNode

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

export function createField<formKeysType extends string>(
    className: any,
    placeholder: string | undefined,
    name: formKeysType,
    type: string,
    validators: Array<fieldValidatorType>,
    component: (Element: WrappedFieldProps) => React.ReactNode,
    props = {},
    text = ""
) {
    return <div>
        <Field className={className}
               placeholder={placeholder}
               type={type}
               validate={validators}
               component={component}
               name={name}
               {...props}
        />{text}
    </div>
}
