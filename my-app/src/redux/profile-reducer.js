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
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy; //если есть return, break можно не использовать
        }
        case ADD_POST: {
            let stateCopy = {...state}
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };

            stateCopy.myPosts = [...state.myPosts];
            stateCopy.myPosts.push(newPost);

            stateCopy.newPostText = '';
            return stateCopy; //если есть return,yar break можно не использовать
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