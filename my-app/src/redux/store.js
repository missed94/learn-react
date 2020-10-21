import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }


}








export default store;