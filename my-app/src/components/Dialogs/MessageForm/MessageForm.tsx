import React, {FC} from "react";
import classes from "./MessageForm.module.scss"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {NewPostFormValuesType} from "../../Profile/My_posts/NewPostForm/NewPostForm";


export type dialogsFormValuesType = {
    message: string,
}
type propsType = {}
type dialogsFormValuesTypeKeys = Extract<keyof dialogsFormValuesType, string>

const MessageForm:FC<InjectedFormProps<dialogsFormValuesType>> = ({handleSubmit}) => {
    return (
        <div className={classes.messageFormComponent}>
            <form onSubmit={handleSubmit} className={classes.sendForm}>
                {createField<dialogsFormValuesTypeKeys>(
                    classes.textarea,
                    "Enter your message",
                    "message",
                    "text",
                    [required],
                    Textarea
                )}
                <button type="submit" className={classes.btn}>Send message</button>
            </form>
        </div>
    )
}

const MessageReduxForm = reduxForm<dialogsFormValuesType>({
    form: 'message'
})(MessageForm)

export default MessageReduxForm