import React, {useEffect, useState} from "react";
import classes from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileDataForm from "./ProfileData/ProfileDataForm/ProfileDataForm";
import ProfileDataFormRedux from "./ProfileData/ProfileDataForm/ProfileDataForm";


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, updateProfileData}) => {

    let [editMode, setEditMode] = useState(false);


    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true)
        }
    }

    const submitForm = (data) => {
        updateProfileData(data).then(
            () => {
                setEditMode(false)
            }
        )
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfoComponent}>
            <ProfileAvatar isOwner={isOwner} profile={profile} savePhoto={savePhoto}/>
            <ProfileStatus isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>
            {
                editMode ? <ProfileDataFormRedux profile={profile} initialValues={profile} onSubmit={submitForm}/> :
                    <ProfileData profile={profile} activateEditMode={activateEditMode} isOwner={isOwner}/>
            }
        </div>
    );
};


export default ProfileInfo;
