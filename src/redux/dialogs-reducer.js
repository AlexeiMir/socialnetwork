const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
             newMessageBody: ''
                
}


const dialogsReducer =(state=initialState,action) => {
    switch (action.type) {
        case  UPDATE_NEW_MESSAGE_BODY : {
            let stateCopy ={...state};
            stateCopy.newMessageBody = action.body;
                return stateCopy; 
            }
        case  SEND_MESSAGE : {
                let stateCopy ={...state};
                let body = stateCopy.newMessageBody;
                stateCopy.newMessageBody ='';
                stateCopy.messages = [...state.messages];
                stateCopy.messages.push({id:6, message: body });
                 return stateCopy;
                }
        default :
                return state;

    }
    
}

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body });
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;