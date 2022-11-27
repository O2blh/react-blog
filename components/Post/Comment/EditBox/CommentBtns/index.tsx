import React from 'react'
import Emoji from '@/components/Emoji'

import styles from './style.module.css'

interface IProps {
  isReply: boolean
  closeReplyBox: () => void
  emojiClickCallback: (any) => void
  showPreview: boolean
  setShowPreview: (boolean) => void
  publishComment: () => void
}

const CommentBtns: React.FC<IProps> = ({
  isReply,
  closeReplyBox,
  emojiClickCallback,
  showPreview,
  setShowPreview,
  publishComment,
}) => {
  return (
    <div className={styles.commentBtns}>
      <Emoji emojiClickCallback={emojiClickCallback} />
      {isReply && (
        <div className={styles.cancelBtn} onClick={closeReplyBox}>
          取消
        </div>
      )}
      <div
        className={styles.previewBtn}
        onClick={() => {
          setShowPreview(!showPreview)
        }}
      >
        {showPreview ? '关闭' : '预览'}
      </div>
      <div className={styles.sendBtn} onClick={publishComment}>
        {isReply ? '回复' : '发布'}
      </div>
    </div>
  )
}

export default CommentBtns
