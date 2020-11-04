import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.postsData.map(posts => <Post message = {posts.message} likeCount = {posts.likesCount}/>)

let newPostElement = React.createRef()

let addPost = () => {
   props.dispatch({type: 'ADD-POST'})
}

let onPostChange = () => {
  let text = newPostElement.current.value
  let action = props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
  props.dispatch(action)
}

    return  (
   <div className={styles.postsBlock}>
        <h3>My post</h3>
        <div>
          <div>
          <textarea onChange={onPostChange} ref={newPostElement} value = {props.newPostText}></textarea>
          </div>
          <div>
          <button onClick={addPost}>Add Post</button>
          </div>
        </div>
       <div className={styles.posts}>
       {postElements}
       </div>
    </div>
    )
}

export default MyPosts;