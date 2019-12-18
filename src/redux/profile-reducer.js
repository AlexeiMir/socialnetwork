const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    
        posts : [
            {id: 1, name:'Hi, how are you?',   likesCounter: '325'},
            {id: 2, name:"It's my first post", likesCounter: '47'}
          ],
          newPostText : 'it-kamasutra'
}
debugger;
const profileReducer =(state=initialState,action) => {
    
    switch (action.type) {
        case ADD_POST: {
                let newPost = {
                    id: 2,
                    name:state.newPostText,
                    likesCounter: 2
                }
                return {
                  ...state,
                  posts:[...state.posts, newPost],
                  newPostText: ''
                }
               
              }
        case UPDATE_NEW_POST_TEXT: {
          return {
            ...state,
            newPostText: action.newText
          }
              }
        default :
                return state;
    }
}
export const  actionCreatorAddPost = () => ({type : ADD_POST});
  
  export const actionCreatorUpdateNewPostText = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text});


export default profileReducer;