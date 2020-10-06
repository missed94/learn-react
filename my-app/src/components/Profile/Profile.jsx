import React from "react";
import My_posts from "./My_posts/My_posts";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Dialogs from "../Dialogs/Dialogs";
import MyPostsContainer from "./My_posts/MyPostsContainer";




const Profile = (props) => {
    return (
        <div className={classes.profileComponent}>
            <ProfileInfo />
            <MyPostsContainer
                /*store={props.store}*/
                /*myPosts={props.profilePage.myPosts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}*/
            />
        </div>
    );
};

export default Profile;
