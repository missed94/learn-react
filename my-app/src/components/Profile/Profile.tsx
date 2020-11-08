import React, {FC} from "react";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";
import {profileType} from "../../types/types";


type propsType = {
    profile: profileType | null,
    status: string,
    isOwner: boolean,
    updateUserStatus: (status:string) => void
    savePhoto: (newPhoto:any) => void
    updateProfileData: (profile:profileType) => void
}

const Profile:FC<propsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, updateProfileData}) => {
    return (
        <div className={classes.profileComponent}>
            <ProfileInfo updateProfileData={updateProfileData} savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
