const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer =(state,action) => {
    switch (action.type) {
        case ADD_POST:
                let newPost = {
                    id: 2,
                    name:state.newPostText,
                    likesCounter: 2
                }
        
                state.posts.push(newPost);
                state.newPostText = '';
                return state;
        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
        default :
                return state;
    }
}
export const  actionCreatorAddPost = () => ({type : ADD_POST});
  
  export const actionCreatorUpdateNewPostText = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text});


export default profileReducer;