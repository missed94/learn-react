import React from "react";
import classes from "./My_posts.module.scss"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";




const My_posts = (props) => {

    let postsArray = props.myPosts.map((post, i) => {
        return <Post key={i} id={post.id} message={post.message} likes={post.likes}/>
    })



    let addPost = () => {
       let action = addPostActionCreator()
        props.dispatch(action);
    }

    let onPostChange = (e) => {
        let text = e.target.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.MyPostsComponent}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange}  className={classes.textarea}
                          value={props.newPostText}/>
                <button onClick={addPost} className={classes.addBtn}>Add post
                </button>
            </div>
            <ul className={classes.posts}>
                {postsArray}
            </ul>
        </div>
    )
}

export default My_posts