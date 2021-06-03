import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileContent from './ProfileContent/ProfileContent';

const Profile = () => {
  return (
    <div>
      <ProfileContent />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;