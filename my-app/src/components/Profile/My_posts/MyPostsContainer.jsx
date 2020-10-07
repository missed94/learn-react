import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import My_posts from "./My_posts";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.myPosts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (My_posts)

export default MyPostsContainer