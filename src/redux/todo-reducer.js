import {todoAPI} from '../api/api'
import { stopSubmit } from 'redux-form';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized:false
}

const todoReducer =(state=initialState,action) => {
    
    switch (action.type) {
        
        case INITIALIZED_SUCCESS: {
          return {
            
            ...state, initialized:true
          }
        }
        default :
                return state;
    }
}
  
export const postTask = (title) => async(dispatch) =>{
const response = await todoAPI.postTask(title)
if (response.data.resultCode === 0) {
  dispatch(addTask)
}
}


 


export default todoReducer;