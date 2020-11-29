import React from "react";
import classes from "./ProfileData.module.scss"
import Contact from "./Contact/Contact";
import {contactsType, profileType} from "../../../../types/types";


const ProfileData: React.FC<propsType> = ({profile, activateEditMode, isOwner}) => {

    return (
        <div className={classes.ProfileDataComponent}>
            {isOwner && <button onClick={activateEditMode}>Change profile info</button>
            }
            <div className={classes.row}>
                <h4 className={classes.row__title}>Name:</h4>
                {profile.fullName}
            </div>
            <div className={classes.row}>
                <h4 className={classes.row__title}>About me:</h4>
                {profile.aboutMe}
            </div>
            <div className={classes.row}>
                <h4 className={classes.row__title}>Contacts:</h4>
                <ul>
                    {Object
                        .keys(profile.contacts)
                        .map((key) => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof contactsType]}/>
                        })}
                </ul>
            </div>
            <div className={classes.row}>
                <h4 className={classes.row__title}>Looking for a job:</h4>
                <p>{profile.lookingForAJob ? "yes" : "no"}</p>
            </div>

            <div className={classes.row}>
                <h4 className={classes.row__title}>Professional skills:</h4>
                {profile.lookingForAJob ? <p>{profile.lookingForAJobDescription}</p> : null}
            </div>
        </div>
    )
}

export default ProfileData







type propsType = {
    profile: profileType,
    activateEditMode: () => void,
    isOwner: boolean
}