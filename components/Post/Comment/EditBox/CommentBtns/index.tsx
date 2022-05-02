import React from 'react'
import Emoji from '@/components/Emoji'

import styles from './style.module.css'

const CommentBtns = ({ isReply, closeReplyBox, emojiClickCallback }) => {
  return (
    <div className={styles.commentBtns}>
      <Emoji emojiClickCallback={emojiClickCallback} />
      {isReply && (
        <div className={styles.cancelBtn} onClick={closeReplyBox}>
          取消
        </div>
      )}
      <div className={styles.previewBtn}>预览</div>
      <div className={styles.sendBtn}>发布</div>
    </div>
  )
}

export default CommentBtns
