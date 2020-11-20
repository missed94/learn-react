import {getAuthUserData} from "./auth-reducer";
import {AppStateType, InferActionsTypes} from "../redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";


let initialState = {
    initialized: false,
}

type initialStateType = typeof initialState

const appReducer = (state = initialState, action:appActionTypes):initialStateType => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

type appActionTypes = InferActionsTypes<typeof AppActions>

const AppActions = {
   setInitialized:() => ({type: 'SET_INITIALIZED'} as const)
}

type GetStateType = () => AppStateType
type dispatchType = Dispatch<appActionTypes>
type thunkType = ThunkAction<Promise<void>, AppStateType, unknown, appActionTypes>

export const initializeApp = (): thunkType => {
    return async (dispatch) => {
        await dispatch(getAuthUserData())
        dispatch(AppActions.setInitialized())
    }
}


export default appReducer