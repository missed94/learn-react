import React from "react";
import classes from "./NewPostForm.module.scss";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormControls";




const maxLength10 = maxLengthCreator(10)
const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={classes.textarea}
                   name={"post"}
                   component={Textarea}
                   placeholder={"Enter your post"}
                   validate={[required,maxLength10]}
            />
            <button className={classes.addBtn}>Add post
            </button>
        </form>
    )
}

const NewPostReduxForm = reduxForm({
    form: 'post'
})(NewPostForm)

export default NewPostReduxForm