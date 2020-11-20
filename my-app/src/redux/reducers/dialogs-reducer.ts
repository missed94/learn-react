import {InferActionsTypes} from "../redux-store";


type dialogsType = {
    id: number
    name: string
}
type messagesType = {
    id: number
    message: string
}

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
type initialStateType = typeof initialState


const dialogsReducer = (state = initialState, action:profileActionTypes): initialStateType => {
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

export type profileActionTypes = InferActionsTypes<typeof dialogsActions>

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