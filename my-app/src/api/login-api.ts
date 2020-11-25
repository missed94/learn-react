import {CaptchaEnum, instance, responseType, ResultCodesEnum} from "./api";


type meResponseDataType = {
    id: number,
    email: string,
    login: string
}

type loginResponseDataType = {
    userId: number
}

export const loginAPI = {
    me() {
        return instance.get<responseType<meResponseDataType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<responseType<loginResponseDataType, ResultCodesEnum | CaptchaEnum>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(response => {
                return response.data
            })
    },

    logout() {
        return instance.delete<responseType>(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}