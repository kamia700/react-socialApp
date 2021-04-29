import React from 'react';
import s from'./ProfileContent.module.css';

const ProfileContent = () => {
  return (
    <div className={s.wrap}>
      <div className={s.bg}>
        <img src='https://images.contentstack.io/v3/assets/blte962564a7ccdad95/blt6673351f18e18b68/5d0a6279b58121dc58ed5303/5.2.1Stockholm.jpg?auto=webp&format=pjpg&quality=80&width=1200&height=1200&fit=crop&crop=1200:630,smart'></img>
      </div>
      <div className='item'>
        ava + description
      </div>
    </div>
)}

export default ProfileContent;