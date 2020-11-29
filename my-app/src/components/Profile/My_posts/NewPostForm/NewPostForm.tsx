import React from "react";
import classes from "./NewPostForm.module.scss";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {createField, Textarea} from "../../../common/FormsControls/FormControls";


const maxLength10 = maxLengthCreator(10)

const NewPostForm: React.FC<InjectedFormProps<NewPostFormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<NewPostFormValuesTypeKeys>(
                classes.textarea,
                "Enter your post",
                "post",
                "text",
                [required, maxLength10],
                Textarea
            )}
            <button className={classes.addBtn}>Add post
            </button>
        </form>
    )
}

const NewPostReduxForm = reduxForm<NewPostFormValuesType>({
    form: 'post'
})(NewPostForm)

export default NewPostReduxForm






export type NewPostFormValuesType = {
    post: string,
}
type NewPostFormValuesTypeKeys = Extract<keyof NewPostFormValuesType, string>