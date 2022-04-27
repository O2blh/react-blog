import React from 'react'
import Divider from './Divider'
import Placeholder from './Placehold'
import EditBox from './EditBox'

import styles from './style.module.css'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Divider />
      <EditBox />
      <Placeholder msgCount={1} />
    </div>
  )
}

export default Comment
