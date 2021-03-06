const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likes: 20},
    {id: 2, message: 'My first post', likes: 15}
  ],
  newPostText: 'Enter your message'
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
      
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default: 
      return state;
  }   
}

export let addPostActionCreator = () => ( { type: ADD_POST } ) 
export let updateNewPostActionCreator = (text) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } )
export default profileReducer;