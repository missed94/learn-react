import axios from "axios";
import {profileType} from "../types/types";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "201d1bd9-901a-4727-afb5-9d1c77d38b75"
    }
})

export enum ResultCodesEnum {
    success = 0,
    error = 1,
}
export enum CaptchaEnum {
    captcha = 10
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}

export const followUnfollowAPI = {
    getFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },

    getUnfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },

}

export const profileAPI = {
    getProfile(id: number | null) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            });
    },

    getStatus(id: number) {
        return instance.get(`profile/status/${id}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
            .then(response => {
                return response.data
            });
    },

    updatePhoto(photo: any) {
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo/`, formData)
            .then(response => {
                return response.data
            })
    },

    updateData(profile: profileType) {
        return instance.put(`profile/`, profile)
            .then(response => {
                return response.data
            });
    }
}



type meResponseType = {
    data: {
        id: number,
        email: string,
        login: string },

    resultCode: ResultCodesEnum,
    messages: Array<string>
}

type loginResponseType = {
    data: {
        userId: number
    },
    resultCode: ResultCodesEnum | CaptchaEnum,
    messages: Array<string>
}

type logoutResponseType = {
    data: object
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

export const loginAPI = {
    me() {
        return instance.get<meResponseType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email: string, password: string, rememberMe = false, captcha :null | string = null) {
        return instance.post<loginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => {
                return response.data
            })
    },

    logout() {
        return instance.delete<logoutResponseType>(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
            .then(response => {
          return response.data
        })
    }
}

