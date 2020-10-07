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

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.newText;//добавляем полученный текст в свойство newMessage объекта dialogsPage
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state}

            let newMessage = { //добавляем значение свойства newMessage в свойство message нового промежуточного объекта
                id: 10,
                message: state.newMessage,
            }

            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage); //далее пушим промежуточный объект в свойство messages объекта dialogsPage

            stateCopy.newMessage = '';//обнуляем инпут
            return stateCopy;
        }
        default:
            return state;
    }


}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})


export const onMessageChangeActionCreator = (valueText) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText:valueText,
})

export default dialogsReducer