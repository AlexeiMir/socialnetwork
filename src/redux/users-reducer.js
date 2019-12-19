const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [ {id: 1, followed:true, name:'Viktor'}]             
}


const usersReducer =(state=initialState,action) => {
    switch (action.type) {
        case  FOLLOW : 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u.id,followed:true}
                    }
                    return u;
                })
            };
            
            
        case  UNFOLLOW : 
        let body = state.newMessageBody;
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u.id, followed:false}
                    }
                    return u;
                })
               
            };

        default :
                return state;

    }
    
}

export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId });

export default usersReducer;