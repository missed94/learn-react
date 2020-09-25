import React from "react";
import classes from "./My_posts.module.scss"
import Post from "./Post/Post";
import Profile from "../Profile";


const My_posts = (props) => {

    let postsArray = props.myPosts.map((post, i) => {
        return <Post key={i} id={post.id} message={post.message} likes={post.likes}/>
    })

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.MyPostsComponent}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} className={classes.textarea}
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