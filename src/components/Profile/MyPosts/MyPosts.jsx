import React from 'react';
import s from'./MyPosts.module.css';
import Post from'./Post/Post';

// let PostsData = [
//   {id: 1, message: 'Hi, how are you?', likes: 20},
//   {id: 2, message: 'My first post', likes: 15}
// ]

const MyPosts = (props) => {
  let postElements = props.posts
    .map(el => <Post message={el.message} likes={el.likes} />
    );

  let newPostElement = React.createRef();

  // добавляет новый пост при нажатии на кнопку отправить
  let addPost = () => {
    // props.addPost();
    props.dispatch({ type: 'ADD-POST'});
  }

// отслеживает изменение поля для ввода сообщения 
  let onPostChange = () => {
    let text = newPostElement.current.value;
    // вызываем функцию из state для записи новых данных в textarea
    // props.updateNewPostText(text);
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text})
  }

  return (
  <div> 
    <h3>My posts</h3>
    <div>
      <div>
        <textarea onChange={ onPostChange } value={ props.newPostText } ref={ newPostElement } name="" id="" cols="50" rows="2" />
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {/* <Post message={PostsData[0].message} likes={PostsData[0].likes} />
      <Post message={PostsData[1].message} likes={PostsData[1].likes} /> */}
      { postElements }
    </div>
  </div>
  )
}

export default MyPosts;