import {CaptchaEnum, loginAPI, profileAPI, ResultCodesEnum, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {photosType} from "../../types/types";
import {AppStateType} from "../redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = 'SET_USER_DATA'
const CAPTCHA_URL_SUCCESS = 'CAPTCHA_URL_SUCCESS'


const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false,
    photos: null as photosType | null,
    captchaUrl: null as string | null
}

type initialStateType = typeof initialState

const authReducer = (state = initialState, action: actionTypes): initialStateType => {
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
                captchaUrl: action.captchaUrl,
            }
        }
        default:
            return state
    }
}

type actionTypes = setAuthUserDataActionType | captchaUrlSuccessType


type setAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    photos: photosType | null
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA;
    payload: setAuthUserDataActionPayloadType;
}

const setAuthUserData = (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    photos: photosType | null
): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        userId, email, login, isAuth, photos
    }
})

type captchaUrlSuccessType = {
    type: typeof CAPTCHA_URL_SUCCESS,
    captchaUrl: string
}

const captchaUrlSuccess = (captchaUrl: string): captchaUrlSuccessType => ({
    type: CAPTCHA_URL_SUCCESS,
    captchaUrl
})


type GetStateType = () => AppStateType
type dispatchType = Dispatch<actionTypes>
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, actionTypes>


export const getAuthUserData = (): thunkType => async (dispatch) => {
    let data = await loginAPI.me()
    if (data.resultCode === ResultCodesEnum.success) {
        let {id, email, login} = data.data
        let {photos} = await profileAPI.getProfile(id)
        dispatch(setAuthUserData(id, email, login, true, photos))
    }
}


export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string
): thunkType => async (dispatch:any) => {
    let data = await loginAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === CaptchaEnum.captcha) {
            dispatch(getCaptchaURL())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message,}))
    }
}


export const getCaptchaURL = ():thunkType => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url
    dispatch(captchaUrlSuccess(captchaUrl))
}

export const logout = ():thunkType => {
    return async (dispatch) => {
        let data = await loginAPI.logout()
        if (data.resultCode === ResultCodesEnum.success) {
            dispatch(setAuthUserData(null, null, null, false, null))
        }
    }
}


export default authReducer