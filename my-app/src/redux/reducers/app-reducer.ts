import {getAuthUserData} from "./auth-reducer";
import {AppStateType} from "../redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";


const SET_INITIALIZED = 'SET_INITIALIZED'

export type initialStateType = {
    initialized: boolean,
}

let initialState:initialStateType = {
    initialized: false,
}


const appReducer = (state = initialState, action:actionTypes):initialStateType => {
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

type actionTypes = initializedActionType

type initializedActionType = {
    type: typeof SET_INITIALIZED;
}

const setInitialized = ():initializedActionType => ({type: SET_INITIALIZED});


type GetStateType = () => AppStateType
type dispatchType = Dispatch<actionTypes>
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, actionTypes>

export const initializeApp = (): thunkType => {
    return async (dispatch) => {
        await dispatch(getAuthUserData())
        dispatch(setInitialized())
    }
}


export default appReducer