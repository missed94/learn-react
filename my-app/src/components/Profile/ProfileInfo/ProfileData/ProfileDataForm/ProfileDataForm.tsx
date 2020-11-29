import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "../../../My_posts/NewPostForm/NewPostForm.module.scss";
import {createField, Input, Textarea} from "../../../../common/FormsControls/FormControls";
import {required} from "../../../../../utils/validators/validators";
import {profileType} from "../../../../../types/types";



const ProfileDataForm: FC<propsType & InjectedFormProps<profileType, propsType>> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h4>Name:</h4>
                {createField<ProfileDataFormValuesTypeKeys>(
                    classes.fullNameInput,
                    "Enter your full name",
                    "fullName",
                    "text",
                    [required],
                    Input
                )}
            </div>
            <div>
                <h4>About me:</h4>
                {createField<ProfileDataFormValuesTypeKeys>(
                    classes.AboutMeInput,
                    "Ask about you",
                    "aboutMe",
                    "text",
                    [required],
                    Textarea
                )}
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
                {createField<ProfileDataFormValuesTypeKeys>(
                    classes.lookingForAJobInput,
                    undefined,
                    "lookingForAJob",
                    "checkbox",
                    [required],
                    Input
                )}
            </div>
            <div>
                <h4>Professional skills:</h4>
                {createField<ProfileDataFormValuesTypeKeys>(
                    classes.skillsInput,
                    "Ask your skills",
                    "lookingForAJobDescription",
                    "text",
                    [],
                    Textarea
                )}
            </div>
            <button>Submit profile info</button>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm<profileType, propsType>({
    form: 'profile-data'
})(ProfileDataForm)

export default ProfileDataFormRedux







type propsType = {
    profile: profileType,
}

type ProfileDataFormValuesTypeKeys = Extract<keyof profileType, string>