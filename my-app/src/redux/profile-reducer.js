import {profileAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    myPosts: [
        {id: 1, message: "Hi, how are you!", likes: "30"},
        {id: 2, message: "it's my first post", likes: "20"}
    ],
    newPostText: "",
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
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
                myPosts: [newPost, ...state.myPosts],
                newPostText: ''
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
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

export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
})


export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(data => {
                dispatch(setUserProfile(data))
            })

    }
}

export const getUserStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id)
            .then(data => {
                dispatch(setUserStatus(data))
            })

    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) dispatch(setUserStatus(status))
            })

    }
}

export default profileReducer