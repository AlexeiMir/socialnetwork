import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';





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
    this._callSubscriber =  observer; 
            },
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);

    }
        
}


    window.store = store;

    
export default store;





    
