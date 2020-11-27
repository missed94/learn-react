import React from "react";
import classes from "./Post.module.scss"

type propsType = {
    id: number,
    message: string,
    likes: number,
    removePost: (id: number) => void
}

const Post: React.FC<propsType> = ({id, likes, message, removePost}) => {

    const HandleRemovePost = () => {
        removePost(id)
    }

  return (
    <li className={classes.postComponent}>
        <div>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt=""/>
            <p className={classes.comment}>{message}</p>
            <div>
                <p>Like <span>{likes}</span></p>
            </div>
        </div>
        <button onClick={HandleRemovePost}>remove post</button>
    </li>
  )
}

export default Post