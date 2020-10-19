import React from "react";
import classes from "./MessageForm.module.scss"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength40 = maxLengthCreator(40)

const MessageForm = (props) => {

    return (
        <div className={classes.messageFormComponent}>
            <form onSubmit={props.handleSubmit} className={classes.sendForm}>
                <Field
                    className={classes.textarea}
                    name={"message"}
                    placeholder={"Enter your message"}
                    validate={[required,maxLength40]}
                    component={Textarea}/>
                <button type="submit" className={classes.btn}>Send message</button>
            </form>
        </div>

    )
}

const MessageReduxForm = reduxForm({
    form: 'message'
})(MessageForm)

export default MessageReduxForm