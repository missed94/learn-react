import {instance} from "./api";

type getCaptchaUrlType = {
    url: string
}

export const securityAPI = {
    getCaptcha() {
        return instance.get<getCaptchaUrlType>('security/get-captcha-url')
            .then(response => response.data)
    }
}