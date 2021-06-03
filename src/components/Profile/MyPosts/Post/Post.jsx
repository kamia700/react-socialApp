import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
      <img src='https://i.pinimg.com/originals/d6/53/78/d6537837a5f328ce4ba497ce869cd307.png' alt='avatar'></img>
      {props.message}
      <p>like <span>{props.likes}</span></p>
    </div>

}

export default Post;