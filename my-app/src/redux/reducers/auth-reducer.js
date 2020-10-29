import {loginAPI, profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    photos: {},
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth, photos ) => ({
    type: SET_USER_DATA,
    data: {
        userId, email, login, isAuth, photos
    }
})

export const getAuthUserData = () => async (dispatch, getState) => {
    let data = await loginAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        let {photos} = await profileAPI.getProfile(id)
        dispatch(setAuthUserData(id, email, login, true, photos))
    }
}


export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await loginAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
             dispatch(getAuthUserData())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {
                _error: message,
            }))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await loginAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export default authReducer