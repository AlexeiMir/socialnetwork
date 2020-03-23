import {authAPI} from '../api/api'
import { stopSubmit } from 'redux-form';
import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized:false
}

const appReducer =(state=initialState,action) => {
    
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
  
  


 


export default appReducer;