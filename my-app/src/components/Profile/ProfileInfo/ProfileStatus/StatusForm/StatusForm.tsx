import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {profileType} from "../../../../../types/types";
import {createField, Input} from "../../../../common/FormsControls/FormControls";
import {required} from "../../../../../utils/validators/validators";



const StatusForm:FC<InjectedFormProps<statusFormValueType, {}> & {}> = (props) => {
    return (
        <form onBlur={props.handleSubmit} onSubmit={props.handleSubmit} >
            {createField<statusFormValuesTypeKeys>(
                null,
                "Enter your status",
                "status",
                "text",
                [],
                Input
            )}
            <button>Save</button>
        </form>
    )
}

const StatusReduxForm = reduxForm<statusFormValueType, {}>({
    form: 'status'
})(StatusForm)

export default StatusReduxForm







export type statusFormValueType = {
    status: string
}
type statusFormValuesTypeKeys = Extract<keyof statusFormValueType, string>