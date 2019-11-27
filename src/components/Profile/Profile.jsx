import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return <div>
    <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg"></img>

    <div>
      Ava+description
  </div>
  <MyPosts />
  </div>
  
}

export default Profile;
