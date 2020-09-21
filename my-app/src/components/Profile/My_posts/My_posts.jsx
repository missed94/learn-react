import React from "react";
import classes from "./My_posts.module.scss"
import Post from "./Post/Post";


const My_posts = () => {
  return (
    <div>
      <h3>My posts</h3>
      <ul className={classes.posts}>
        <Post message="Hi, how are you!" likes="30"/>
        <Post message="it's my first post" likes="20"/>
      </ul>
    </div>
  )
}

export default My_posts