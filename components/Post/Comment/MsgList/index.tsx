import React, { useMemo } from 'react'
import { IComment } from '@/interface'
import Comment from './Comment'

import styles from './style.module.css'

interface IProps {
  commentList: Array<IComment>
}

const MsgList: React.FC<IProps> = ({ commentList }) => {
  const firstCommentList = useMemo(() => {
    const result = commentList.filter((comment) => !comment.commentId)
    result.forEach((comment) => {
      comment.replyList = commentList.filter((comm) => comm.commentId === comment._id)
    })
    return result
  }, [commentList])

  return (
    <>
      {firstCommentList.map((item) => {
        if (item.replyList && item.replyList.length > 0) {
          return (
            <>
              <Comment key={item._id} comment={item} toComment={item} />
              <div className={styles.replyList}>
                {item.replyList.map((reply) => {
                  const replyTo = commentList.find((list) => list._id === reply.replyId)
                  return <Comment key={reply._id} comment={reply} toComment={item} replyTo={replyTo} />
                })}
              </div>
            </>
          )
        }
        return <Comment key={item._id} comment={item} toComment={item} />
      })}
    </>
  )
}

export default MsgList
