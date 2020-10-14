import {profileAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'



let initialState = {
    myPosts: [
        {id: 1, message: "Hi, how are you!", likes: "30"},
        {id: 2, message: "it's my first post", likes: "20"}
    ],
    newPostText: "",
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return { //если есть return, break можно не использовать
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };

            return { //если есть return, break можно не использовать
                ...state,
                myPosts: [newPost, ...state.myPosts ],
                newPostText: ''
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }


}


export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})


export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(data => {
                dispatch(setUserProfile(data))
            })

    }
}

export default profileReducer