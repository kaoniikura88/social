import React from 'react';
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
    <div className={styles.img}>
    <img src="https://i.imgur.com/RRUe0Mo.png"/>
    </div>
    <div>
      ava+descr
    </div>
  </div>
}

export default ProfileInfo;