import {followUnfollowAPI, usersAPI} from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'FOLLOWING_IN_PROGRESS'


let initialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => { //альтернатива копиованию этого же массива
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: { //блокировка кнопки при нажатии follow/unfollow
            return {
                ...state,
                followingInProgress: action.isFetching // если isFetching === true
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)] //filter уже вернет новый массив..добавляем только те id которая не равны id из action'а
            }
        }


        default:
            return state;
    }


}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));//circle of loading on
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false)); //circle of loading off

    }
}

export const getFollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId)) //disabled button
        let data = await followUnfollowAPI.getFollow(userId)
        if (data.resultCode === 0) {
            dispatch(follow(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId)) //enabled button
    }
}

export const getUnfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId)) //disabled button
        let data = followUnfollowAPI.getUnfollow(userId)
        if (data.resultCode === 0) {
            dispatch(unfollow(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId)) //enabled button
    }
}


export default usersReducer