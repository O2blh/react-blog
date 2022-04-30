import React from 'react'
import Divider from './Divider'
import Placeholder from './Placehold'
import EditBox from './EditBox'
import MsgList from './MsgList'

import styles from './style.module.css'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <Divider />
      <EditBox replyPerson={null} />
      <Placeholder msgCount={1} />
      <MsgList />
    </div>
  )
}

export default Comment
