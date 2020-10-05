const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})


export const onMessageChangeActionCreator = (valueText) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText:valueText,
})

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessage = action.newText;//добавляем полученный текст в свойство newMessage объекта dialogsPage
            return state;
        case SEND_MESSAGE:
            let newMessage = { //добавляем значение свойства newMessage в свойство message нового промежуточного объекта
                id: 10,
                message: state.newMessage,
            }

            state.messages.push(newMessage); //далее пушим промежуточный объект в свойство messages объекта dialogsPage
            state.newMessage = '';//обнуляем инпут
            return state;
        default:
            return state;
    }


}


export default dialogsReducer