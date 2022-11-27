import React from 'react'
import { IComment } from '@/interface'
import Divider from './Divider'
import Placeholder from './Placehold'
import EditBox from './EditBox'
import MsgList from './MsgList'

import styles from './style.module.css'

interface IProps {
  commentList: Array<IComment>
}

const Comment: React.FC<IProps> = ({ commentList }) => {
  return (
    <div className={styles.comment}>
      <Divider />
      <EditBox />
      <Placeholder msgCount={commentList.length} />
      <MsgList commentList={commentList} />
    </div>
  )
}

export default Comment
