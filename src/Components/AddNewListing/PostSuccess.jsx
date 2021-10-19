import React from 'react'
import styles from './NewListing.module.css'

const PostSuccess = (props) => {
  return (
    <div className={styles.post_success}>
      <span>You have successfully posted</span>
      <div>
        <button>Done</button>
      </div>
    </div>
  );
}
export default PostSuccess