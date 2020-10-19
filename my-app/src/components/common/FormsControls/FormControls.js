import React from "react"
import classes from "./FormControls.module.scss"


const FormControls = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={
            hasError
                ? `${classes.formControl} ${classes.error}`
                : `${classes.formControl}`
        }
        >
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError
                ? <p className={classes.errorMessage}>{meta.error}</p>
                : null
            }
        </div>
    )
}


export const Textarea = FormControls("textarea");
export const Input = FormControls("input");