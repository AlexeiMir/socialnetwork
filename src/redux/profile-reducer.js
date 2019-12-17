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
                let stateCopy = {...state};
                stateCopy.posts = {...state.posts}
                stateCopy.posts.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;
              }
        case UPDATE_NEW_POST_TEXT: {
          let stateCopy = {...state};
          stateCopy.posts = {...state.posts}
                stateCopy.newPostText = action.newText;
                return stateCopy;
              }
        default :
                return state;
    }
}
export const  actionCreatorAddPost = () => ({type : ADD_POST});
  
  export const actionCreatorUpdateNewPostText = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text});


export default profileReducer;