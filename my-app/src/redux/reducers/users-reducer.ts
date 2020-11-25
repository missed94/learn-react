import {mappingArraysInObject} from "../../utils/helpers/helpers";
import {usersType} from "../../types/types";
import {AppStateType, InferActionsTypes} from "../redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../../api/users-api";
import {followUnfollowAPI} from "../../api/follow-unfollow-api";

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


type usersActionTypes = InferActionsTypes<typeof usersActions>

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




type GetStateType = () => AppStateType
type dispatchType = Dispatch<usersActionTypes>
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, usersActionTypes>

export const requestUsers = (currentPage: number, pageSize: number): thunkType => {
    return async (dispatch) => {
        dispatch(usersActions.toggleIsFetching(true));//circle of loading on
        dispatch(usersActions.setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(usersActions.setUsers(data.items));
        dispatch(usersActions.setTotalUsersCount(data.totalCount));
        dispatch(usersActions.toggleIsFetching(false)); //circle of loading off
    }
}

const followUnfollowToggle = async (dispatch: dispatchType,
                                    userId: number,
                                    apiMethod: any,
                                    actionCreator: (userId: number) => usersActionTypes
) => {
    dispatch(usersActions.toggleFollowingInProgress(true, userId)) //disabled button
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.toggleFollowingInProgress(false, userId)) //enabled button
}

export const getFollow = (userId: number): thunkType => {
    return async (dispatch) => {
        await followUnfollowToggle(dispatch, userId, followUnfollowAPI.getFollow, usersActions.follow)
    }
}

export const getUnfollow = (userId: number): thunkType => {
    return async (dispatch) => {
        await followUnfollowToggle(dispatch, userId, followUnfollowAPI.getUnfollow, usersActions.unfollow)
    }
}

export default usersReducer