import {photosType, profileType} from "../types/types";
import {instance, responseType} from "./api";

type responsePhotosType = {
    photos: photosType
}

export const profileAPI = {
    getProfile(id: number | null) {
        return instance.get<profileType>(`profile/${id}`)
            .then(response => response.data);
    },
    getStatus(id: number) {
        return instance.get<string>(`profile/status/${id}`)
            .then(response => response.data);
    },
    updateStatus(status: string) {
        return instance.put<responseType>(`profile/status/`, {status: status})
            .then(response => response.data);
    },
    updatePhoto(photo: string | Blob) {
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put<responseType<responsePhotosType>>(`profile/photo/`, formData)
            .then(response => response.data)
    },
    updateData(profile: profileType) {
        return instance.put<responseType>(`profile/`, profile)
            .then(response => response.data);
    }
}