import {mappingArraysInObject} from "../../utils/helpers/helpers";
import {usersType} from "../../types/types";
import {InferActionsTypes, thunkType} from "../redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/users-api";
import {followUnfollowAPI} from "../../api/follow-unfollow-api";
import {responseType} from "../../api/api";

let initialState = {
    users: [] as Array<usersType>,
    portionSize: 10,
    pageSize: 30,
    totalItemsCount: 0,
    currentPage: 1,
    filter: {
        term: "",
        friend: null as null | boolean
    },
    followingInProgress: [] as Array<number>,
    isFetching: false,
};

const usersReducer = (state = initialState, action: usersActionTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW": {
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
        "UNFOLLOW": {
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
        "SET_USERS": {
            return {
                ...state,
                users: action.users
            }
        }
        case
        "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case
        "SET_FILTER_USERS": {
            return {
                ...state,
                filter: action.payload
            }
        }
        case
        "SET_TOTAL_USERS_COUNT": {
            return {
                ...state,
                totalItemsCount: action.totalItemsCount
            }
        }
        case
        "TOGGLE_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case
        "TOGGLE_IS_FOLLOWING_PROGRESS": { //блокировка кнопки при нажатии follow/unfollow
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

export const usersActions = {
    follow: (userId: number) => ({
        type: 'FOLLOW',
        userId
    } as const),

    unfollow: (userId: number) => ({
        type: 'UNFOLLOW',
        userId
    } as const),

    setUsers: (users: Array<usersType>) => ({
        type: 'SET_USERS',
        users
    } as const),

    setCurrentPage: (pageNumber: number) => ({
        type: 'SET_CURRENT_PAGE',
        pageNumber
    } as const),

    setFilterUsers: (filter: filterType) => ({
        type: 'SET_FILTER_USERS',
        payload: filter
    } as const),

    setTotalUsersCount: (totalItemsCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        totalItemsCount
    } as const),

    toggleIsFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const),

    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const)
}

export const requestUsers = (currentPage: number, pageSize: number, filter: filterType): thunkType<usersActionTypes> => {
    return async (dispatch) => {
        dispatch(usersActions.toggleIsFetching(true));//circle of loading on
        dispatch(usersActions.setCurrentPage(currentPage))
        dispatch(usersActions.setFilterUsers(filter))
        let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(usersActions.setUsers(data.items));
        dispatch(usersActions.setTotalUsersCount(data.totalCount));
        dispatch(usersActions.toggleIsFetching(false)); //circle of loading off
    }
}

const followUnfollowToggle = async (dispatch: dispatchType,
                                    userId: number,
                                    apiMethod: (userId: number) => Promise<responseType>,
                                    actionCreator: (userId: number) => usersActionTypes
) => {
    dispatch(usersActions.toggleFollowingInProgress(true, userId)) //disabled button
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.toggleFollowingInProgress(false, userId)) //enabled button
}

export const getFollow = (userId: number): thunkType<usersActionTypes> => {
    return async (dispatch) => {
        await followUnfollowToggle(dispatch, userId, followUnfollowAPI.getFollow, usersActions.follow)
    }
}

export const getUnfollow = (userId: number): thunkType<usersActionTypes> => {
    return async (dispatch) => {
        await followUnfollowToggle(dispatch, userId, followUnfollowAPI.getUnfollow, usersActions.unfollow)
    }
}

export default usersReducer


export type usersActionTypes = InferActionsTypes<typeof usersActions>
export type filterType = typeof initialState.filter
type dispatchType = Dispatch<usersActionTypes>
export type initialStateType = typeof initialState
