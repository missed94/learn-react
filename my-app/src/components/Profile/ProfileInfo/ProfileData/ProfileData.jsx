import React from "react";
import classes from "./ProfileData.module.scss"
import Contact from "./Contact/Contact";

const ProfileData = ({profile, activateEditMode, isOwner}) => {


    return (
        <div className={classes.ProfileDataComponent}>
            {isOwner && <button onClick={activateEditMode}>Change profile info</button>
            }
            <div>
                <h4>Name:</h4>
                {profile.fullName}
            </div>
            <div>
                <h4>About me:</h4>
                {profile.aboutMe}
            </div>
            <div>
                <h4>Contacts:</h4>
                <ul>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </ul>
            </div>
            <div>
                <h4>Looking for a job:</h4>
                <p>{profile.lookingForAJob ? "yes" : "no"}</p>
            </div>

            <div>
                <h4>Professional skills:</h4>
                {profile.lookingForAJob ? <p>{profile.lookingForAJobDescription}</p> : null}
            </div>
        </div>
    )
}

export default ProfileData