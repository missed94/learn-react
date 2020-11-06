import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import validContactsObjCreated from "../../components/common/validContactsObjCreated/validContactsObjCreated";
import {myPostsType, photosType, profileType} from "../../types/types";
import {getAuthUserData} from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO = 'SAVE_PHOTO'


let initialState = {
    myPosts: [
        {id: 1, message: "Hi, how are you!", likes: 30},
        {id: 2, message: "it's my first post", likes: 20}
    ] as Array<myPostsType>,
    profile: null as profileType | null,
    status: "" as string,
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action:any):initialStateType => {

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
                profile: {...state.profile, photos: action.photos} as profileType
            }
        }
        default:
            return state;
    }
}

type addPostType = {
    type: typeof ADD_POST,
    newPost: string
}
export const addPost = (newPost:string):addPostType => ({
    type: ADD_POST,
    newPost
})

type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}
export const setUserProfile = (profile:profileType):setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
})


type setUserStatusType = {
    type: typeof SET_USER_STATUS,
    status: string
}
export const setUserStatus = (status:string):setUserStatusType => ({
    type: SET_USER_STATUS,
    status
})

type removePostType = {
    type: typeof DELETE_POST,
    postId: number
}
export const removePost = (postId: number): removePostType => ({
    type: DELETE_POST,
    postId
})

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO,
    photos: photosType
}
export const savePhotoSuccess = (photos:photosType):savePhotoSuccessType => ({
    type: SAVE_PHOTO,
    photos
})


export const getProfile = (id:number) => {
    return async (dispatch:any) => {
        let data = await profileAPI.getProfile(id)
        dispatch(setUserProfile(data))
    }
}

export const getUserStatus = (id:number) => async (dispatch:any) => {
    try {
        let data = await profileAPI.getStatus(id)
        dispatch(setUserStatus(data))
    } catch (error) {
        alert(error.message)
    }
}


export const updateUserStatus = (status:string) => async (dispatch:any) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch (error) {
        alert(error.message)
    }


}

export const savePhoto = (newPhoto:any) => {
    return async (dispatch:any, getState:any) => {
        let data = await profileAPI.updatePhoto(newPhoto)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
            dispatch(getAuthUserData())
        }
    }
}

export const updateProfileData = (profile:profileType) => {
    return async (dispatch:any, getState:any) => {
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