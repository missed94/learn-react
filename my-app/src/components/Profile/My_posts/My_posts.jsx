import React from "react";
import classes from "./My_posts.module.scss"
import Post from "./Post/Post";


let myPosts = [
    {id:1, message:"Hi, how are you!", likes: "30"},
    {id:2, message:"it's my first post", likes: "20"}
]

const My_posts = () => {
  return (
    <div className={classes.MyPostsComponent}>
      <h3>My posts</h3>
       <div>
           <textarea className={classes.textarea}></textarea>
           <button className={classes.addBtn}>Add post</button>
       </div>
      <ul className={classes.posts}>
        <Post id={myPosts[0].id} message={myPosts[0].message} likes={myPosts[0].likes}/>
        <Post id={myPosts[1].id} message={myPosts[1].message} likes={myPosts[1].likes}/>
      </ul>
    </div>
  )
}

export default My_posts