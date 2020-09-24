import {rerenderEntireThree} from "../render";

let state = {

    profilePage: {
        myPosts: [
            {id: 1, message: "Hi, how are you!", likes: "30"},
            {id: 2, message: "it's my first post", likes: "20"}
        ],

    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Oleg"},
            {id: 3, name: "Oxana"},
            {id: 4, name: "Lisa"},
        ],

        messages: [
            {id: 1, message: "Hello", alignSelf: "flex-end"},
            {id: 2, message: "How are you", alignSelf: "flex-start"},
            {id: 3, message: "What is your health", alignSelf: "flex-end"},
        ]
    },

    sidebar: {
        friends: [
            {id: 1, name: "Danil"},
            {id: 2, name: "Artem"},
            {id: 3, name: "Dima"},
            {id: 4, name: "Igor"},
        ]
    }
}



export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likes: 0,
    };

    state.profilePage.myPosts.push(newPost);
    rerenderEntireThree(state);
}

export default state;