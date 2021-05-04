import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileContent from './ProfileContent/ProfileContent';

const Profile = (props) => {
  return (
    <div>
      <ProfileContent />
      <MyPosts posts={ props.data.posts } 
              newPostText={ props.data.newPostText }
              dispatch = { props.dispatch}
              />
    </div>
  )
}

export default Profile;