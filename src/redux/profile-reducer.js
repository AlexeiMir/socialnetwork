import {usersAPI,profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
    
        posts : [
            {id: 1, name:'Hi, how are you?',   likesCounter: '325'},
            {id: 2, name:"It's my first post", likesCounter: '47'},
            {id: 3, name:"I work succsesfully", likesCounter: '27'},
            {id: 4, name:"I'm here", likesCounter: '45'}
          ],
          newPostText : 'it-kamasutra',
          profile: null,
          status:""
}

const profileReducer =(state=initialState,action) => {
    
    switch (action.type) {
        case ADD_POST: {
                let newPost = {
                    id: 2,
                    name:action.newPostText,
                    likesCounter: 2
                }
                return {
                  ...state,
                  posts:[...state.posts, newPost],
                  newPostText: ''
                }
               
              }

        case SET_USER_PROFILE: {
          return {
            ...state, profile:action.profile
          }
        }

        case SET_STATUS: {
          return {
            ...state,status:action.status
          }
        }

        case DELETE_POST: {
          return {
            ...state,posts: state.posts.filter(p => p.id != action.postId)
          }
        }
        default :
                return state;
    }
}
export const  actionCreatorAddPost = (newPostText) => ({type : ADD_POST,newPostText});
  
  export const setUserProfile = (profile) => ({type : SET_USER_PROFILE, profile});
  export const setStatus = (status) => ({type : SET_STATUS, status:status});
  export const deletePost = (postId) => ({type: DELETE_POST, postId })

  export const getUserProfile = (userId) => async (dispatch) => {
        const response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data));
    }
  

  export const getStatus = (userId) => async (dispatch) => {
      const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
  

  export const updateStatus = (status) => async (dispatch) => {
      const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
    }
  


export default profileReducer;