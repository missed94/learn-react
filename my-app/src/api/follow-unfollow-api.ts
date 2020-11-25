import {instance, responseType} from "./api";

export const followUnfollowAPI = {
    getFollow(userId: number) {
        return instance.post<responseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },

    getUnfollow(userId: number) {
        return instance.delete<responseType>(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },

}