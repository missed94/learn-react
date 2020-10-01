const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';





let store = {

    _state: {
        profilePage: {
            myPosts: [
                {id: 1, message: "Hi, how are you!", likes: "30"},
                {id: 2, message: "it's my first post", likes: "20"}
            ],
            newPostText: "",

        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Danil"},
                {id: 2, name: "Artem"},
                {id: 3, name: "Dima"},
                {id: 4, name: "Igor"},
            ]
        }
    },
    _callSubscriber() {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {  //{ type: 'ADD-POST' } // общий метод для всей логики. Принимает тип объекта action и, если нужно дополниельные данные
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0,
            };

            this._state.profilePage.myPosts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessage = action.newText;//добавляем полученный текст в свойство newMessage объекта dialogsPage
            this._callSubscriber(this._state);//ререндерим страницу

        } else if (action.type === SEND_MESSAGE) {
            let newMessage = { //добавляем значение свойства newMessage в свойство message нового промежуточного объекта
                id: 10,
                message: this._state.dialogsPage.newMessage,
            }

            this._state.dialogsPage.messages.push(newMessage); //далее пушим промежуточный объект в свойство messages объекта dialogsPage
            this._state.dialogsPage.newMessage = '';//обнуляем инпут
            this._callSubscriber(this._state);//ререндерим страницу
        }
    }


}


export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    })


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})


export const onMessageChangeActionCreator = (valueText) => ({
        type: UPDATE_MESSAGE_TEXT,
        newText:valueText,
    })


/*let rerenderEntireTree = () => {
}*/


/*let state = {

    profilePage: {
        myPosts: [
            {id: 1, message: "Hi, how are you!", likes: "30"},
            {id: 2, message: "it's my first post", likes: "20"}
        ],
        newPostText: "google",

    },

    dialogsPage: {
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

        newMessage:"",
    },

    sidebar: {
        friends: [
            {id: 1, name: "Danil"},
            {id: 2, name: "Artem"},
            {id: 3, name: "Dima"},
            {id: 4, name: "Igor"},
        ]
    }
}*/


/*
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0,
    };

    state.profilePage.myPosts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
*/

/*export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}*/


/*export let updateMessageText = (newText) => {
    state.dialogsPage.newMessage = newText;//добавляем полученный текст в свойство newMessage объекта dialogsPage
    rerenderEntireTree(state);//ререндерим страницу
}*/

/*export let sendMessage = () => {
    let newMessage = { //добавляем значение свойства newMessage в свойство message нового промежуточного объекта
        id: 10,
        message: state.dialogsPage.newMessage,
    }

    state.dialogsPage.messages.push(newMessage); //далее пушим промежуточный объект в свойство messages объекта dialogsPage
    state.dialogsPage.newMessage = '';//обнуляем инпут
    rerenderEntireTree(state);//ререндерим страницу
}*/


/*export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}*/


export default store;