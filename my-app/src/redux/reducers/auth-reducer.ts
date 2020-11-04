import {loginAPI, profileAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const CAPTCHA_URL_SUCCESS = 'CAPTCHA_URL_SUCCESS'


export type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean,
    photos: object,
    captchaUrl: string | null
}

const initialState:initialStateType = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    photos: {},
    captchaUrl: null
}

const authReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
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

type setAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null,
    photos: object | null
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA;
    payload: setAuthUserDataActionPayloadType;
}

 const setAuthUserData = (
     userId:number | null,
     email:string | null,
     login:string | null,
     isAuth:boolean | null,
     photos:object | null
 ):setAuthUserDataActionType => ({
    type: SET_USER_DATA,
     payload: {
        userId, email, login, isAuth, photos
    }
})

type captchaUrlSuccessType = {
    type: typeof CAPTCHA_URL_SUCCESS,
    captchaUrl: string
}

 const captchaUrlSuccess = (captchaUrl:string):captchaUrlSuccessType => ({
     type: CAPTCHA_URL_SUCCESS,
     captchaUrl
 })

export const getAuthUserData = () => async (dispatch:any) => {
    let data = await loginAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        let {photos} = await profileAPI.getProfile(id)
        dispatch(setAuthUserData(id, email, login, true, photos))
    }
}


export const login = (
    email:string,
    password:string,
    rememberMe:boolean,
    captcha:string
) => async (dispatch:any) => {
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


export const getCaptchaURL = () => async (dispatch:any) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url
    dispatch(captchaUrlSuccess(captchaUrl))
}

export const logout = () => {
    return async (dispatch:any) => {
        let data = await loginAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, null))
        }
    }
}


export default authReducer