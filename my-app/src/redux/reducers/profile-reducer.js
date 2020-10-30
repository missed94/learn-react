import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import validContactsObjCreated from "../../components/common/validContactsObjCreated/validContactsObjCreated";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO = 'SAVE_PHOTO'

let initialState = {
    myPosts: [
        {id: 1, message: "Hi, how are you!", likes: "30"},
        {id: 2, message: "it's my first post", likes: "20"}
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPost,
                likes: 0,
            };

            return { //если есть return, break можно не использовать
                ...state,
                myPosts: [newPost, ...state.myPosts],
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                myPosts: state.myPosts.filter(p => p.id !== action.postId)
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

        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}

            }
        }

        default:
            return state;
    }
}

export const addPost = (newPost) => ({type: ADD_POST, newPost})


export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
})

export const removePost = (postId) => ({
    type: DELETE_POST,
    postId
})

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO,
    photos
})


export const getProfile = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id)
        dispatch(setUserProfile(data))
    }
}

export const getUserStatus = (id) => async (dispatch) => {
    try {
        let data = await profileAPI.getStatus(id)
        dispatch(setUserStatus(data))
    } catch (error) {
        alert(error.message)
    }
}


export const updateUserStatus = (status) => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch (error) {
        alert(error.message)
    }


}

export const savePhoto = (photos) => {
    return async (dispatch) => {
        let data = await profileAPI.updatePhoto(photos)
        if (data.resultCode === 0) dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const updateProfileData = (profile) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const data = await profileAPI.updateData(profile)
        if (data.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('profile-data', {"contacts": validContactsObjCreated(data.messages)}))
            return Promise.reject(data.messages[0]);
        }
    }
}

export default profileReducer