import React from 'react';
import s from'./MyPosts.module.css';
import Post from'./Post/Post';
 
const MyPosts = (props) => {
  let postElements = props.posts
    .map(el => <Post message={el.message} likes={el.likes} />
    );

  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
  <div> 
    <h3>My posts</h3>
    <div>
      <div>
        <textarea onChange={ onPostChange } value={ props.newPostText } ref={ newPostElement } name="" id="" cols="50" rows="2" />
      </div>
      <div>
        <button onClick={ onAddPost }>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      { postElements }
    </div>
  </div>
  )
}

export default MyPosts;