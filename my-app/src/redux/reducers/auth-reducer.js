import {loginAPI, profileAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const CAPTCHA_URL_SUCCESS = 'CAPTCHA_URL_SUCCESS'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    photos: {},
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }

        case CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state
    }
}

 const setAuthUserData = (userId, email, login, isAuth, photos) => ({
    type: SET_USER_DATA,
    data: {
        userId, email, login, isAuth, photos
    }
})

 const captchaUrlSuccess = (captchaUrl) => ({
     type: CAPTCHA_URL_SUCCESS,
     captchaUrl
 })

export const getAuthUserData = () => async (dispatch) => {
    let data = await loginAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        let {photos} = await profileAPI.getProfile(id)
        dispatch(setAuthUserData(id, email, login, true, photos))
    }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
        let data = await loginAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaURL())
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message,}))
        }
    }


export const getCaptchaURL = () => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url
    dispatch(captchaUrlSuccess(captchaUrl))
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