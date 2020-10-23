import profileReducer, {addPost, removePost} from "./profile-reducer";
import React from "react";

let state = {
    myPosts: [
        {id: 1, message: "Hi, how are you!", likes: "30"},
        {id: 2, message: "it's my first post", likes: "20"}
    ]
}


test('length of posts should be incremented', () => {
// 1. test data
    let action = addPost("новый текст")
// 2. action
    let newState = profileReducer(state, action)
// 3. expectation
    expect(newState.myPosts.length).toBe(3);
});

test('new post should be have message "новый текст"', () => {
// 1. test data
    let action = addPost("новый текст")
// 2. action
    let newState = profileReducer(state, action)
// 3. expectation
    expect(newState.myPosts[0].message).toBe("новый текст")
});


test('after removing post-length should be incremented', () => {
// 1. test data
    let action = removePost(1)
// 2. action
    let newState = profileReducer(state, action)
// 3. expectation
    expect(newState.myPosts.length).toBe(1)
});

test(`after removing post-length shouldn't be incremented if id incorrect`, () => {
// 1. test data
    let action = removePost(4)
// 2. action
    let newState = profileReducer(state, action)
// 3. expectation
    expect(newState.myPosts.length).toBe(2)
});



