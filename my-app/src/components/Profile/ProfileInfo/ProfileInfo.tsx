import React, {useState} from "react";
import classes from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileDataFormRedux from "./ProfileData/ProfileDataForm/ProfileDataForm";
import {profileType} from "../../../types/types";


type propsType = {
    profile: profileType | null
    status: string,
    updateUserStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (newPhoto: File) => void,
    updateProfileData: (profile:profileType) => Promise<any>
}

const ProfileInfo: React.FC<propsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, updateProfileData}) => {

    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        if (isOwner) {
            setEditMode(true)
        }
    }

    const submitForm = (data: profileType) => {
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


export default ProfileInfo
