import {instance} from "./api";

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
            .then(response => {
                return response.data
            })
    }
}