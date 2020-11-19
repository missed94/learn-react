import React, {FC} from "react";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profileType} from "../../types/types";
import MyPosts from "./My_posts/MyPosts";


type propsType = {
    profile: profileType | null,
    status: string,
    isOwner: boolean,
    updateUserStatus: (status: string) => void
    savePhoto: (newPhoto: any) => void
    updateProfileData: (profile: profileType) => Promise<any>
}


const Profile: FC<propsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, updateProfileData}) => {
    return (
        <div className={classes.profileComponent}>
            <ProfileInfo
                updateProfileData={updateProfileData}
                savePhoto={savePhoto}
                isOwner={isOwner}
                profile={profile}
                status={status} updateUserStatus={updateUserStatus}
            />
            <MyPosts/>
        </div>
    );
};

export default Profile;
