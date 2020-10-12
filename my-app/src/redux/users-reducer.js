const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';


let initialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
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

        case TOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }


        default:
            return state;
    }


}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGLE_IS_FETCHING, isFetching})

export default usersReducer