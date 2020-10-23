import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
  
    return  (
        <div className={styles.item}>
          <img src="https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w330.jpg"/>
          <div>
          {props.message}
          </div>
          <div>
            {props.likeCount}
          </div>
        </div>
        
    )
}

export default Post;

