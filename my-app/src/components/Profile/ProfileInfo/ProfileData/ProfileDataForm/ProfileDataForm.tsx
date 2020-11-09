import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "../../../My_posts/NewPostForm/NewPostForm.module.scss";
import {Input, Textarea} from "../../../../common/FormsControls/FormControls";
import {required} from "../../../../../utils/validators/validators";
import {profileType} from "../../../../../types/types";


type propsType = {
    profile: profileType,
}

const ProfileDataForm: FC<propsType & InjectedFormProps<profileType, propsType>> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h4>Name:</h4>
                <Field className={classes.fullNameInput}
                       name={"fullName"}
                       component={Input}
                       placeholder={"Enter your full name"}
                       validate={[required]}
                />
            </div>
            <div>
                <h4>About me:</h4>
                <Field className={classes.AboutMeInput}
                       name={"aboutMe"}
                       component={Textarea}
                       placeholder={"Ask about you"}
                />
            </div>
            <div>
                <h4>Contacts:</h4>
                <ul>
                    {Object.keys(profile.contacts).map(key => {
                        return (
                            <ul className={classes.contactInputs__list}>
                                <p>{key}:</p>
                                <Field className={classes.contactInputs__item}
                                       name={`contacts.${key}`}
                                       component={Input}
                                       placeholder={`Ask your ${key}`}
                                />
                            </ul>
                        )
                    })}
                </ul>
                {error && <div className={classes.form__summaryError}> {error} </div>}
            </div>
            <div>
                <h4>Looking for a job:</h4>
                <Field className={classes.lookingForAJobInput}
                       name={"lookingForAJob"}
                       component={"input"}
                       type={"checkbox"}
                    //placeholder={"Ask about you"}
                    //validate={[required]}
                />
            </div>

            <div>
                <h4>Professional skills:</h4>
                <Field className={classes.skillsInput}
                       name={"lookingForAJobDescription"}
                       component={Textarea}
                       placeholder={"Ask your skills"}
                    //validate={[required]}
                />
            </div>
            <button>Submit profile info</button>
        </form>
    )
}


const ProfileDataFormRedux = reduxForm<profileType, propsType>({
    form: 'profile-data'
})(ProfileDataForm)

export default ProfileDataFormRedux