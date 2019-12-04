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
 ]
    
        },

    profilePage : {

            posts : [
                {id: 1, name:'Hi, how are you?',   likesCounter: '325'},
                {id: 2, name:"It's my first post", likesCounter: '47'}
              ]
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

    export let addPost = (postMessage) =>{
        debugger;
        let newPost = {
            id: 2,
            name:postMessage,
            likesCounter: 2
        }

        state.profilePage.posts.push(newPost);

    }

export default state;





    
