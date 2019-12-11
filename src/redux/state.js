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
        newMessage: 'it '
        
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
    
    getState () {
        debugger;
        return this._state;
    },
          
   subscriber (observer) {
    this._callSubsciber =  observer; 
            },
    dispatch (action) {
        
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 2,
                name:this._state.profilePage.newPostText,
                likesCounter: 2
            }
    
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubsciber(this._state); 
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            this._state.profilePage.newPostText = action.newText;
            this._callSubsciber(this._state);
        } else if (action.type === 'ADD-MESSAGE' ) {
            let newMessage = {
                id: 2,
                message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = ' ';
            this._callSubsciber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {

            this._state.dialogsPage.newMessage = action.newMessageText;
                this._callSubsciber(this._state);

        }


    }
        
}

    window.store = store;

    
export default store;





    
