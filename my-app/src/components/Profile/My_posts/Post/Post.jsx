import React from "react";
import classes from "./Post.module.scss"

const Post = (props) => {
  return (
    <li className={classes.postComponent}>
      <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
      <p className={classes.comment}>{props.message}</p>
      <div>
        <p>Like <span>{props.likes}</span></p>
      </div>
    </li>
  )
}

export default Post