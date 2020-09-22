import React from "react";
import My_posts from "./My_posts/My_posts";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={classes.profileComponent}>

            <ProfileInfo/>
            <My_posts/>
        </div>
    );
};

export default Profile;
