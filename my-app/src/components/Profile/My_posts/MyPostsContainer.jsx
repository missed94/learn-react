import React from "react";
import {addPost, removePost} from "../../../redux/reducers/profile-reducer";
import My_posts from "./My_posts";
import {connect} from "react-redux";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.myPosts,
        newPostText: state.profilePage.newPostText
    }
}


const MyPostsContainer = compose(
    connect(mapStateToProps, {addPost, removePost}),
    React.memo //альтернатитва pureComponent для функциональной компоненты
)(My_posts)

export default MyPostsContainer