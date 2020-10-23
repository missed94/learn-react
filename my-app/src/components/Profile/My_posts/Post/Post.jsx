import React from "react";
import classes from "./Post.module.scss"

const Post = (props) => {



    const HandleRemovePost = () => {
        props.removePost(props.id)
    }

  return (
    <li className={classes.postComponent}>
        <div>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
            <p className={classes.comment}>{props.message}</p>
            <div>
                <p>Like <span>{props.likes}</span></p>
            </div>
        </div>
        <button onClick={HandleRemovePost}>remove post</button>
    </li>
  )
}

export default Post