import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileContent from './ProfileContent/ProfileContent';

const Profile = (props) => {
  // debugger;
  return (
    <div>
      <ProfileContent />
      <MyPosts posts={ props.data.posts } 
              newPostText={ props.data.newPostText }
              dispatch = { props.dispatch}
              // addPost={ props.addPost} 
              />
    </div>
  )
}

export default Profile;