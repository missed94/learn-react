import {CaptchaEnum, ResultCodesEnum} from "../../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {photosType} from "../../types/types";
import {InferActionsTypes, thunkType} from "../redux-store";
import {loginAPI} from "../../api/login-api";
import {profileAPI} from "../../api/profile-api";
import {securityAPI} from "../../api/securityapi";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false,
    photos: null as photosType | null,
    captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: authActionTypes): initialStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.payload,
            }
        }
        case 'CAPTCHA_URL_SUCCESS': {
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        }
        default:
            return state
    }
}

const authActions = {
    setAuthUserData: (
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean,
        photos: photosType | null
    ) => ({
        type: 'SET_USER_DATA',
        payload: {userId, email, login, isAuth, photos}
    } as const),

    captchaUrlSuccess: (captchaUrl: string) => ({
        type: 'CAPTCHA_URL_SUCCESS',
        captchaUrl
    } as const)
}

export const getAuthUserData = (): thunkType<authActionTypes> => async (dispatch) => {
    let data = await loginAPI.me()
    if (data.resultCode === ResultCodesEnum.success) {
        let {id, email, login} = data.data
        let {photos} = await profileAPI.getProfile(id)
        dispatch(authActions.setAuthUserData(id, email, login, true, photos))
    }
}


export const login = (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string
): thunkType<authActionTypes | FormAction> => async (dispatch) => {
    let data = await loginAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.success) {
       await dispatch(getAuthUserData())
    } else {
        if (data.resultCode === CaptchaEnum.captcha) {
           await dispatch(getCaptchaURL())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message,}))
    }
}

export const getCaptchaURL = (): thunkType<authActionTypes> => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url
    dispatch(authActions.captchaUrlSuccess(captchaUrl))
}

export const logout = (): thunkType<authActionTypes> => {
    return async (dispatch) => {
        let data = await loginAPI.logout()
        if (data.resultCode === ResultCodesEnum.success) {
            dispatch(authActions.setAuthUserData(null, null, null, false, null))
        }
    }
}


export default authReducer

type initialStateType = typeof initialState
type authActionTypes = InferActionsTypes<typeof authActions>
