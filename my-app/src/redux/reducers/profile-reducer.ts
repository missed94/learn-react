import {FormAction, stopSubmit} from "redux-form";
import validContactsObjCreated from "../../components/common/validContactsObjCreated/validContactsObjCreated";
import {myPostsType, photosType, profileType} from "../../types/types";
import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes, thunkType} from "../redux-store";
import {profileAPI} from "../../api/profile-api";


let initialState = {
    myPosts: [
        {id: 1, message: "Hi, how are you!", likes: 30},
        {id: 2, message: "it's my first post", likes: 20}
    ] as Array<myPostsType>,
    profile: null as profileType | null,
    status: "" as string,
}

const profileReducer = (state = initialState, action: profileActionTypes): initialStateType => {

    switch (action.type) {
        case "ADD_POST": {
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
        case "DELETE_POST": {
            return {
                ...state,
                myPosts: state.myPosts.filter(p => p.id !== action.postId)
            }
        }
        case "SET_USER_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET_USER_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SAVE_PHOTO": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as profileType
            }
        }
        default:
            return state;
    }
}

export const profileActions = {
    addPost: (newPost: string) => ({
        type: 'ADD_POST',
        newPost
    } as const),

    setUserProfile: (profile: profileType) => ({
        type: 'SET_USER_PROFILE',
        profile
    } as const),

    setUserStatus: (status: string) => ({
        type: 'SET_USER_STATUS',
        status
    } as const),

    removePost: (postId: number) => ({
        type: 'DELETE_POST',
        postId
    } as const),

    savePhotoSuccess: (photos: photosType) => ({
        type: 'SAVE_PHOTO',
        photos
    } as const)
}

export const getProfile = (id: number | null): thunkType<profileActionTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id)
        dispatch(profileActions.setUserProfile(data))
    }
}

export const getUserStatus = (id: number): thunkType<profileActionTypes> => async (dispatch) => {
    try {
        let data = await profileAPI.getStatus(id)
        dispatch(profileActions.setUserStatus(data))
    } catch (error) {
        alert(error.message)
    }
}

export const updateUserStatus = (status: string): thunkType<profileActionTypes> => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(profileActions.setUserStatus(status))
        }
    } catch (error) {
        alert(error.message)
    }
}

export const savePhoto = (newPhoto: File): thunkType<profileActionTypes> => {
    return async (dispatch) => {
        let data = await profileAPI.updatePhoto(newPhoto)
        if (data.resultCode === 0) {
            dispatch(profileActions.savePhotoSuccess(data.data.photos))
            dispatch(getAuthUserData())
        }
    }
}

export const updateProfileData = (profile: profileType): thunkType<profileActionTypes | FormAction> => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const data = await profileAPI.updateData(profile)
        if (data.resultCode === 0) {
            dispatch(getProfile(userId))
        } else {
            dispatch(stopSubmit('profile-data', {"contacts": validContactsObjCreated(data.messages)}))
            return Promise.reject(data.messages[0])
        }
    }
}

export default profileReducer


export type profileActionTypes = InferActionsTypes<typeof profileActions>
export type initialStateType = typeof initialState
