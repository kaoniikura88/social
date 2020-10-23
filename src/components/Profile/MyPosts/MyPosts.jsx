import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  
  let postsData = [
    {id: 1, message: 'hi, how are you', likesCount: 10 },
    {id: 2, message: 'sit is my first post', likesCount: 12 },
    ]

  let postElements = postsData.map(posts => <Post message = {posts.message} likeCount = {posts.likesCount}/>)

    return  (
   <div className={styles.postsBlock}>
        <h3>My post</h3>
        <div>
          <div>
          <textarea></textarea>
          </div>
          <div>
          <button>Add Post</button>
          </div>
        </div>
       <div className={styles.posts}>
       {postElements}
       </div>
    </div>
    )
}

export default MyPosts;