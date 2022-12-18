import React from 'react'
import { IComment } from '@/interface'
import Divider from './Divider'
import Placeholder from './Placehold'
import EditBox from './EditBox'
import MsgList from './MsgList'

import styles from './style.module.css'

interface IProps {
  commentList: Array<IComment>
  getCommentList: () => void
  addComment: (arg0: any) => any
}

const Comment: React.FC<IProps> = ({ commentList, getCommentList, addComment }) => {
  return (
    <div className={styles.comment}>
      <Divider />
      <EditBox getCommentList={getCommentList} addComment={addComment} />
      <Placeholder msgCount={commentList.length} />
      <MsgList commentList={commentList} getCommentList={getCommentList} addComment={addComment} />
    </div>
  )
}

export default Comment
