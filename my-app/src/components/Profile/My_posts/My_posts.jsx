import React from "react";
import classes from "./My_posts.module.scss"
import Post from "./Post/Post";







const My_posts = (props) => {

    let postsArray = props.myPosts.map((post,i) => {
        return <Post key={i} id={post.id} message={post.message} likes={post.likes}/>
    })

  return (
    <div className={classes.MyPostsComponent}>
      <h3>My posts</h3>
       <div>
           <textarea className={classes.textarea}></textarea>
           <button className={classes.addBtn}>Add post</button>
       </div>
      <ul className={classes.posts}>
          {postsArray}
      </ul>
    </div>
  )
}

export default My_posts