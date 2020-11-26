import {InferActionsTypes} from "../redux-store";
import {dialogsType, messagesType} from "../../types/types";


let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Oxana"},
        {id: 4, name: "Lisa"},
    ] as Array<dialogsType>,
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "What is your health"},
    ] as Array<messagesType>,
}

const dialogsReducer = (state = initialState, action: profileActionTypes): initialStateType => {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        }
        default:
            return state;
    }
}

export const dialogsActions = {
    onSendMessage: (
        id: number,
        message: string
    ) => ({
        type: 'SEND_MESSAGE',
        payload: {
            id,
            message
        }
    } as const)
}


export default dialogsReducer


type initialStateType = typeof initialState
export type profileActionTypes = InferActionsTypes<typeof dialogsActions>

