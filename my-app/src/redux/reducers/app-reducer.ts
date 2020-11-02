import {getAuthUserData} from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED'

export type initialStateType = {
    initialized: boolean,
}

let initialState:initialStateType = {
    initialized: false,
}


const appReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}


type initializedActionType = {
    type: typeof SET_INITIALIZED;
}

const setInitialized = ():initializedActionType => ({type: SET_INITIALIZED});

export const initializeApp = () => {
    return async (dispatch:any) => {
        await dispatch(getAuthUserData())
        dispatch(setInitialized())
    }
}


export default appReducer