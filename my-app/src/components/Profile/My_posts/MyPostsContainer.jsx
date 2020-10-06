import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import My_posts from "./My_posts";




const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        /*props.addPost()*/
       let action = addPostActionCreator()
        props.store.dispatch(action);
    }

    let onPostChange = (text) => {

        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
        /*props.updateNewPostText(text)*/
    }

    return (
        <My_posts
            updateNewPostText={onPostChange}
            addPost={addPost} myPosts={state.profilePage.myPosts}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer