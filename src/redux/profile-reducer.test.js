import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, {actionCreatorAddPost,deletePost} from './profile-reducer'


let state = {
    
    posts : [
        {id: 1, name:'Hi, how are you?',   likesCounter: '325'},
        {id: 2, name:"It's my first post", likesCounter: '47'},
        {id: 3, name:"I work succsesfully", likesCounter: '27'},
        {id: 4, name:"I'm here", likesCounter: '45'}
      ]
}

it('length of posts should be incremented', () => {
    let action = actionCreatorAddPost("it-kamasutra");

    let newState = profileReducer(state,action);


    expect (newState.posts.length).toBe(5)

});

it('message of new post should be correct', () => {
    let action = actionCreatorAddPost("it-kamasutra");

    let newState = profileReducer(state,action);


    expect (newState.posts[4].name).toBe("it-kamasutra")

});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state,action);


    expect (newState.posts.length).toBe(3) 

});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);

    let newState = profileReducer(state,action);


    expect (newState.posts.length).toBe(4) 

});
