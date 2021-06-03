let initialState = {
  friends: [
    {id: 1, name: 'Dmitry', avatar: 'https://image.pngaaa.com/371/1423371-middle.png'},
    {id: 4, name: 'Andry', avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7959eaa6-5390-47f6-8d5f-86afc4577958/dcfie4l-6318f442-944d-45d8-9302-8b18ea40670e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzk1OWVhYTYtNTM5MC00N2Y2LThkNWYtODZhZmM0NTc3OTU4XC9kY2ZpZTRsLTYzMThmNDQyLTk0NGQtNDVkOC05MzAyLThiMThlYTQwNjcwZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-R_pzvNaz4HHcizHlL2z6OltTQfLe89UUAfErvTxjFM'},
    {id: 5, name: 'Lisa', avatar: 'https://i.pinimg.com/originals/d6/53/78/d6537837a5f328ce4ba497ce869cd307.png'}
  ]
}

const sidebarReducer = (state=initialState, action) => {
  return state;
}

export default sidebarReducer;