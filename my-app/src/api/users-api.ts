import {getItemsType, instance} from "./api";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}