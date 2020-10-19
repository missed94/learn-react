import React from "react";
import classes from "./My_posts.module.scss"
import Post from "./Post/Post";
import NewPostReduxForm from "./NewPostForm/NewPostForm";




const My_posts = (props) => {

    let postsArray = props.myPosts.map((post, i) => {
        return <Post key={post.id} message={post.message} likes={post.likes}/>
    })


    let addNewPost = (values) => {
       props.addPost(values.post)
    }

    return (
        <div className={classes.MyPostsComponent}>
            <h3>My posts</h3>
            <div>
                <NewPostReduxForm onSubmit={addNewPost}/>
            </div>
            <ul className={classes.posts}>
                {postsArray}
            </ul>
        </div>
    )
}

export default My_posts