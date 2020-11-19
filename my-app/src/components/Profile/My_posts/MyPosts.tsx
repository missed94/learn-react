import React from "react";
import {addPost, addPostType, removePost, removePostType} from "../../../redux/reducers/profile-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {myPostsType, newPostFormValuesType} from "../../../types/types";
import {AppStateType} from "../../../redux/redux-store";
import Post from "./Post/Post";
import classes from "./My_posts.module.scss";
import NewPostReduxForm from "./NewPostForm/NewPostForm";



type mapStateToPropsType = {
    myPosts:Array<myPostsType>
}

type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    removePost: (newPostText: number) => void
}

type propsType = mapStateToPropsType & mapDispatchToPropsType

const MyPosts:React.FC<propsType> = ({myPosts, addPost, removePost}) => {

    let postsArray = myPosts.map((post) => {
        return <Post key={post.id} id = {post.id} removePost={removePost} message={post.message} likes={post.likes}/>
    })

    let addNewPost = (values:newPostFormValuesType) => {
        addPost(values.post)
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

let mapStateToProps = (state:AppStateType) => {
    return {
        myPosts: state.profilePage.myPosts,
    }
}

const MyPostsMemorized = React.memo(MyPosts)
export default connect(mapStateToProps, {addPost, removePost})(MyPostsMemorized)
