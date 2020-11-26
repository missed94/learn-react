import {getAuthUserData} from "./auth-reducer";
import {InferActionsTypes, thunkType} from "../redux-store";



let initialState = {
    initialized: false,
}

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


const AppActions = {
   setInitialized:() => ({type: 'SET_INITIALIZED'} as const)
}


export const initializeApp = (): thunkType<appActionTypes> => {
    return async (dispatch) => {
        await dispatch(getAuthUserData())
        dispatch(AppActions.setInitialized())
    }
}


export default appReducer


type initialStateType = typeof initialState
type appActionTypes = InferActionsTypes<typeof AppActions>
