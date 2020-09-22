import React from "react";
import My_posts from "./My_posts/My_posts";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    return (
        <div className={classes.profileComponent}>
            <ProfileInfo />
            <My_posts myPosts={props.myPosts}/>
        </div>
    );
};

export default Profile;
