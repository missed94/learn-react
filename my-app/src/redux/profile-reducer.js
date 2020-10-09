const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';



let initialState = {
    myPosts: [
        {id: 1, message: "Hi, how are you!", likes: "30"},
        {id: 2, message: "it's my first post", likes: "20"}
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return { //если есть return, break можно не использовать
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };

            return { //если есть return, break можно не использовать
                ...state,
                myPosts: [newPost, ...state.myPosts ],
                newPostText: ''
            }
        }
        default:
            return state;
    }


}


export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export default profileReducer