import {followUnfollowAPI, usersAPI} from "../../api/api";
import {mappingArraysInObject} from "../../utils/helpers/helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'FOLLOWING_IN_PROGRESS'




let initialState = {
    users: [],
    portionSize: 10,
    pageSize: 30,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

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
                followingInProgress: action.isFetching // если isFetching === true
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)] //filter уже вернет новый массив..добавляем только те id которая не равны id из action'а
            }
        }
        default:
            return state;
    }


}


export const follow = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});


export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalItemsCount) => ({type: SET_TOTAL_USERS_COUNT, totalItemsCount});
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

const followUnfollowToggle = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingInProgress(true, userId)) //disabled button
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId)) //enabled button
}

export const getFollow = (userId) => {
    return async (dispatch) => {
        followUnfollowToggle(dispatch, userId, followUnfollowAPI.getFollow.bind(followUnfollowAPI), follow)
    }
}

export const getUnfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowToggle(dispatch, userId, followUnfollowAPI.getUnfollow.bind(followUnfollowAPI), unfollow)
    }
}


export default usersReducer