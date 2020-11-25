import {profileType} from "../types/types";
import {instance, responseType} from "./api";



export const profileAPI = {
    getProfile(id: number | null) {
        return instance.get<profileType>(`profile/${id}`)
            .then(response => {
                return response.data
            });
    },

    getStatus(id: number) {
        return instance.get<string>(`profile/status/${id}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status: string) {
        return instance.put<responseType>(`profile/status/`, {status: status})
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