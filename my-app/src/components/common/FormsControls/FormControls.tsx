import React from "react"
import classes from "./FormControls.module.scss"
import {WrappedFieldProps} from "redux-form";



type formControlType = (params: WrappedFieldProps ) => React.ReactNode
const FormControl = (Element: any):formControlType => ({input,meta: {touched, error}, ...props}) => {
    debugger
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