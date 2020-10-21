import React from "react";
import {addPost} from "../../../redux/reducers/profile-reducer";
import My_posts from "./My_posts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.myPosts,
        newPostText: state.profilePage.newPostText
    }
}


const MyPostsContainer = connect(mapStateToProps, {addPost}) (My_posts)

export default MyPostsContainer