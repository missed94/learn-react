import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "201d1bd9-901a-4727-afb5-9d1c77d38b75"
    }
})

export const usersAPI = {
        getUsers(currentPage, pageSize) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                });
        }
}

export const followUnfollowAPI = {
    getFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },

    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },

}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            });
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status:status})
            .then(response => {
                return response.data
            });
    }
}

export const loginAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}

