import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfieInfo/ProfileInfo'

const Profile = (props) => {

    return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={props.profilePage.postsData} 
               newPostText = {props.profilePage.newPostText}
               dispatch={props.dispatch}
               />
  </div>
  )
}

export default Profile;