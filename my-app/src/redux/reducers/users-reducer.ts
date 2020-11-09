import {followUnfollowAPI, usersAPI} from "../../api/api";
import {mappingArraysInObject} from "../../utils/helpers/helpers";
import {usersType} from "../../types/types";
import {AppStateType} from "../redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'FOLLOWING_IN_PROGRESS'


let initialState = {
    users: [] as Array<usersType>,
    portionSize: 10,
    pageSize: 30,
    totalItemsCount: 0,
    currentPage: 1,
    followingInProgress: [] as Array<number>,
    isFetching: true,
};

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: actionTypes): initialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: mappingArraysInObject( // смотри helpers.js
                    state.users,
                    'id',
                    action.userId,
                    {followed: true}
                )
            }
        }
        case
        UNFOLLOW: {
            return {
                ...state,
                users: mappingArraysInObject(
                    state.users,
                    'id',
                    action.userId,
                    {followed: false}
                )
            }
        }
        case
        SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case
        SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case
        SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalItemsCount: action.totalItemsCount
            }
        }
        case
        TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case
        TOGGLE_IS_FOLLOWING_PROGRESS: { //блокировка кнопки при нажатии follow/unfollow
            return {
                ...state,
                followingInProgress: action.isFetching// если isFetching === true
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)] //filter уже вернет новый массив..добавляем только те id которая не равны id из action'а
            }
        }
        default:
            return state;
    }
}


type actionTypes =
    followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | toggleIsFetchingType
    | toggleFollowingInProgressType


export type followType = {
    type: typeof FOLLOW,
    userId: number
}
export const follow = (userId: number): followType => ({
    type: FOLLOW,
    userId
});

export type unfollowType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unfollow = (userId: number): unfollowType => ({
    type: UNFOLLOW,
    userId
});


export type setUsersType = {
    type: typeof SET_USERS,
    users: Array<usersType>
}
export const setUsers = (users: Array<usersType>): setUsersType => ({
    type: SET_USERS,
    users
});

export type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    pageNumber: number
}
export const setCurrentPage = (pageNumber: number): setCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    pageNumber
});


export type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalItemsCount: number
}
export const setTotalUsersCount = (totalItemsCount: number): setTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalItemsCount
});

export type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export type toggleFollowingInProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number,
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): toggleFollowingInProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

type GetStateType = () => AppStateType
type dispatchType = Dispatch<actionTypes>
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, actionTypes>

export const requestUsers = (currentPage: number, pageSize: number): thunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));//circle of loading on
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false)); //circle of loading off
    }
}

const followUnfollowToggle = async (dispatch: dispatchType,
                                    userId: number,
                                    apiMethod: any,
                                    actionCreator: (userId: number) => followType | unfollowType
) => {
    dispatch(toggleFollowingInProgress(true, userId)) //disabled button
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId)) //enabled button
}

export const getFollow = (userId: number): thunkType => {
    return async (dispatch) => {
        await followUnfollowToggle(dispatch, userId, followUnfollowAPI.getFollow.bind(followUnfollowAPI), follow)
    }
}

export const getUnfollow = (userId: number): thunkType => {
    return async (dispatch) => {
        await followUnfollowToggle(dispatch, userId, followUnfollowAPI.getUnfollow.bind(followUnfollowAPI), unfollow)
    }
}

export default usersReducer