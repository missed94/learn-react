import React from "react";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My_posts/MyPostsContainer";




const Profile = (props) => {
    return (
        <div className={classes.profileComponent}>
            <ProfileInfo profile={props.profile}/>
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
