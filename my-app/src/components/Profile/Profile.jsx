import React from "react";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";


const Profile = ({profile, status, updateUserStatus}) => {
    return (
        <div className={classes.profileComponent}>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
