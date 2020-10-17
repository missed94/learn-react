const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Oxana"},
        {id: 4, name: "Lisa"},
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you"},
        {id: 3, message: "What is your health"},
    ],
    newMessage: "",
}


const dialogsReducer = (state = initialState, action) => {

    let stateCopy

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessage: action.newText//добавляем введеный текст в свойство newMessage объекта dialogsPage
            };
        }
        case SEND_MESSAGE: {
            let newMessage = { //добавляем значение свойства newMessage в свойство message нового промежуточного объекта
                id: 10,
                message: state.newMessage,
            }
            return {
                ...state,
                newMessage: '', //обнуляем инпут
                messages: [...state.messages, newMessage /*аналогично stateCopy.messages.push(newMessage);*/],
            };
        }
        default:
            return state;
    }


}


export const onSendMessage = () => ({type: SEND_MESSAGE})


export const onMessageChange = (valueText) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText:valueText,
})

export default dialogsReducer