import axios from "axios";
import {usersType} from "../types/types";


export const instance = axios.create({
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

export type getItemsType = {
    items: Array<usersType>,
    totalCount: number,
    error: string | null
}


export type responseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    resultCode: RC,
    messages: Array<string>
}