const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likes: 20},
        {id: 2, message: 'My first post', likes: 15}
      ],
      newPostText: 'Enter your message'
    },
   
    dialogsPage: { 
      dialogsData: [
        {id: 1, name: 'Dmitry', avatar: 'https://image.pngaaa.com/371/1423371-middle.png'},
        {id: 2, name: 'Viktor', avatar: 'https://e7.pngegg.com/pngimages/701/23/png-clipart-black-and-brown-gorilla-illustration-discord-avatar-twitch-youtube-profile-mammal-face-thumbnail.png'},
        {id: 3, name: 'Sonya', avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123065442/original/76aa155c9e8edd9d401c3aea4bea877aa34ecb0d/draw-avatar-for-your-discord-or-twitter-etc-profile-pic.png'},
        {id: 4, name: 'Andry', avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7959eaa6-5390-47f6-8d5f-86afc4577958/dcfie4l-6318f442-944d-45d8-9302-8b18ea40670e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzk1OWVhYTYtNTM5MC00N2Y2LThkNWYtODZhZmM0NTc3OTU4XC9kY2ZpZTRsLTYzMThmNDQyLTk0NGQtNDVkOC05MzAyLThiMThlYTQwNjcwZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-R_pzvNaz4HHcizHlL2z6OltTQfLe89UUAfErvTxjFM'},
        {id: 5, name: 'Lisa', avatar: 'https://i.pinimg.com/originals/d6/53/78/d6537837a5f328ce4ba497ce869cd307.png'}
      ],

      messageData: [
        {id: 1, message: 'Lorem ipsum dolor sit amet consectetur'},
        {id: 2, message: 'adipisicing elit. Illum, voluptatum natus.'},
        {id: 3, message: 'sit amet consectetur'},
        {id: 4, message: 'Illum, voluptatum natus.'},
        {id: 5, message: 'Ad est cum ratione repudiandae,'},
        {id: 6, message: 'nihil quis quia, fugiat pariatur distinctio'}
      ],
      newMessageText: ''
  
      // avatars: [
      //   {id: 1, avatar: 'https://image.pngaaa.com/371/1423371-middle.png'},
      //   {id: 2, avatar: 'https://e7.pngegg.com/pngimages/701/23/png-clipart-black-and-brown-gorilla-illustration-discord-avatar-twitch-youtube-profile-mammal-face-thumbnail.png'},
      //   {id: 3, avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123065442/original/76aa155c9e8edd9d401c3aea4bea877aa34ecb0d/draw-avatar-for-your-discord-or-twitter-etc-profile-pic.png'},
      //   {id: 4, avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7959eaa6-5390-47f6-8d5f-86afc4577958/dcfie4l-6318f442-944d-45d8-9302-8b18ea40670e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzk1OWVhYTYtNTM5MC00N2Y2LThkNWYtODZhZmM0NTc3OTU4XC9kY2ZpZTRsLTYzMThmNDQyLTk0NGQtNDVkOC05MzAyLThiMThlYTQwNjcwZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-R_pzvNaz4HHcizHlL2z6OltTQfLe89UUAfErvTxjFM'},
      //   {id: 5, avatar: 'https://i.pinimg.com/originals/d6/53/78/d6537837a5f328ce4ba497ce869cd307.png'}
      // ]
    },
  
    sideBar: {
      friends: [
          {id: 1, name: 'Dmitry', avatar: 'https://image.pngaaa.com/371/1423371-middle.png'},
          {id: 4, name: 'Andry', avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7959eaa6-5390-47f6-8d5f-86afc4577958/dcfie4l-6318f442-944d-45d8-9302-8b18ea40670e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzk1OWVhYTYtNTM5MC00N2Y2LThkNWYtODZhZmM0NTc3OTU4XC9kY2ZpZTRsLTYzMThmNDQyLTk0NGQtNDVkOC05MzAyLThiMThlYTQwNjcwZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-R_pzvNaz4HHcizHlL2z6OltTQfLe89UUAfErvTxjFM'},
          {id: 5, name: 'Lisa', avatar: 'https://i.pinimg.com/originals/d6/53/78/d6537837a5f328ce4ba497ce869cd307.png'}
        ]
    }
    
  },

  _callSubscriber () {
    console.log('state changed');
  },
  
  getState () {
    return this._state
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },

  // функция добавления нового поста в массив
  // экспорт без дефолта импортируется немного иначе, смотри в index
  // addPost () {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likes: 0
  //   };
  
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  
  // // Изменят значение newPostText в зависимости от введенных данных 
  // updateNewPostText (newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },



  dispatch (action) { //объект, который описывает действие которое нужно совершить, type:'ADD-POST'
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0
      };
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.messageBody;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let messageBody = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.messageData.push({id: 7, message: messageBody});
      this._callSubscriber(this._state);
    }
  }
}

export let addPostActionCreator = () => ( { type: ADD_POST } ) 

export let updateNewPostActionCreator = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } )

export let sendMessageCreator = () => ( { type: SEND_MESSAGE } ) 

export let updateNewMessageBodyCreator = (body) => 
          ({ type: UPDATE_NEW_MESSAGE_TEXT, messageBody: body }) 

export default store;