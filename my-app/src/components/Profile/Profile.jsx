import React from "react";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";
import {updateProfileData} from "../../redux/reducers/profile-reducer";


const Profile = ({profile, status, updateUserStatus, isOwner, savePhoto, updateProfileData}) => {
    return (
        <div className={classes.profileComponent}>
            <ProfileInfo updateProfileData={updateProfileData} savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateUserStatus={updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
