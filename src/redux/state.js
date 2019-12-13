import {profileReducer} from './profile-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state : {

        dialogsPage : {
    
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
        
            },
    
        profilePage : {
    
                posts : [
                    {id: 1, name:'Hi, how are you?',   likesCounter: '325'},
                    {id: 2, name:"It's my first post", likesCounter: '47'}
                  ],
                  newPostText : 'it-kamasutra'
                },
    
        sidebar : {
                    friends : [
                       {id: 1, friend: 'Dimych'},
                       {id: 2, friend: 'Alex'},
                       {id: 2, friend: 'Anton'},
                       {id: 2, friend: 'Misha'}
                    ]
        
            }
    
    
        },
    callSubsciber () {
            console.log('State was changed');
            },
    
    getState() {
        return this._state;
    },
          
   subscriber (observer) {
    this._callSubsciber =  observer; 
            },
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);





        
        if (action.type === ADD_POST) {
            let newPost = {
                id: 2,
                name:this._state.profilePage.newPostText,
                likesCounter: 2
            }
    
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubsciber(this._state); 
        } else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubsciber(this._state);
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
                this._callSubsciber(this._state);

        } else if (action.type === SEND_MESSAGE ) {
           let body = this._state.dialogsPage.newMessageBody;
           this._state.dialogsPage.newMessageBody ='';
            this._state.dialogsPage.messages.push({id:6, message: body });
           
            this._callSubsciber(this._state);
        } 

    }
        
}

export const  actionCreatorAddPost = () => ({type : ADD_POST});
  
  export const actionCreatorUpdateNewPostText = (text) => ({type : UPDATE_NEW_POST_TEXT, newText : text});

  export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body });
        

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
          

  

    window.store = store;

    
export default store;





    
