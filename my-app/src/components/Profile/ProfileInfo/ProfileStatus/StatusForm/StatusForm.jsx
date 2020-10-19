import React from "react";
import {Field, reduxForm} from "redux-form";





const StatusForm = (props) => {
    return (
        <form onBlur={props.handleSubmit} onSubmit={props.handleSubmit} >
            <Field
                autoFocus
                name={"status"}
                component={"input"}
                placeholder={"Enter status"}
            />
            <button>Save</button>
        </form>
    )
}

const StatusReduxForm = reduxForm({
    form: 'status'
})(StatusForm)

export default StatusReduxForm