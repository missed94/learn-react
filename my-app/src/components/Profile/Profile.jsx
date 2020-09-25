import React from "react";
import My_posts from "./My_posts/My_posts";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    return (
        <div className={classes.profileComponent}>
            <ProfileInfo />
            <My_posts
                myPosts={props.profilePage.myPosts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;
