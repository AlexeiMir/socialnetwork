let renderEntireTree = () => {
console.log('State was changed');
}


let state = {

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


    }

    window.state = state;

    export let addPost = () =>{
        
        let newPost = {
            id: 2,
            name:state.profilePage.newPostText,
            likesCounter: 2
        }

        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = '';
        renderEntireTree(state);

    }

    export let updateNewPostText = (newText) =>{
        
        state.profilePage.newPostText = newText;
        renderEntireTree(state);

    }

    export let addMessage = () =>{
        let newMessage = {
            id: 2,
            message: state.dialogsPage.newMessage
        }
        state.dialogsPage.messages.push(newMessage);
        state.dialogsPage.newMessage = ' ';
        renderEntireTree(state);
    }



    export let updateNewMessage = (newMessageText) => {
        state.dialogsPage.newMessage = newMessageText;
        renderEntireTree(state);

    }

export default state;





    
