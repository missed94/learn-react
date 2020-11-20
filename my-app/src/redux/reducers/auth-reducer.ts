import {CaptchaEnum, loginAPI, profileAPI, ResultCodesEnum, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {photosType} from "../../types/types";
import {AppStateType, InferActionsTypes} from "../redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

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

type authActionTypes = InferActionsTypes<typeof authActions>


const authActions = {

    setAuthUserData: (
        userId: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean,
        photos: photosType | null
    ) => ({
        type: 'SET_USER_DATA',
        payload: {
            userId, email, login, isAuth, photos
        }
    } as const),

    captchaUrlSuccess: (captchaUrl: string) => ({
        type: 'CAPTCHA_URL_SUCCESS',
        captchaUrl
    } as const)
}


type GetStateType = () => AppStateType
type dispatchType = Dispatch<authActionTypes>
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, authActionTypes>


export const getAuthUserData = (): thunkType => async (dispatch) => {
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
): thunkType => async (dispatch: any) => {
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

export const getCaptchaURL = (): thunkType => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url
    dispatch(authActions.captchaUrlSuccess(captchaUrl))
}

export const logout = (): thunkType => {
    return async (dispatch) => {
        let data = await loginAPI.logout()
        if (data.resultCode === ResultCodesEnum.success) {
            dispatch(authActions.setAuthUserData(null, null, null, false, null))
        }
    }
}


export default authReducer