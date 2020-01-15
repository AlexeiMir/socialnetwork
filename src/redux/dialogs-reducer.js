const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    
                dialogs: [
                    {id: 1, name:'Dimych'},
                    {id: 2, name:'Alex'},
                    {id: 3, name:'Nadia'},
                    {id: 4, name:'Anton'},
                    {id: 5, name:'Misha'}
                ],
            
                 messages: [
                        {id: 1, message:'Hi'},
                        {id: 2, message:'What about your project'},
                        {id: 3, message:'Yo'}
             ],
            
                
}


const dialogsReducer =(state=initialState,action) => {
    switch (action.type) {
            
        case  SEND_MESSAGE : 
        let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{id:6, message: body }],
                
            };

        default :
                return state;

    }
    
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;