import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import My_posts from "./My_posts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    /* let state = props.store.getState()*/


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                let state = store.getState()

                let addPost = () => {
                    /*props.addPost()*/
                    let action = addPostActionCreator()
                    store.dispatch(action);
                }

                let onPostChange = (text) => {

                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                    /*props.updateNewPostText(text)*/
                }
                return (
                    <My_posts
                        updateNewPostText={onPostChange}
                        addPost={addPost} myPosts={state.profilePage.myPosts}
                        newPostText={state.profilePage.newPostText}
                    />)
            }
        }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer