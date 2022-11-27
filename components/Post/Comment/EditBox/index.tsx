import React, { useState } from 'react'
import { useMemoizedFn } from 'ahooks'
import { addComment } from '@/request/api'
import { IArticle, IComment } from '@/interface'
import { useSelector } from 'react-redux'
import { message } from 'antd'
import Avatar from './Aratar'
import ReplyBox from './ReplyBox'
import InfoBox from './InfoBox'
import TextAreaBox from './TextAreaBox'
import CommentBtns from './CommentBtns'
import PreviewBox from '../PreviewBox'

import styles from './style.module.css'

interface IProps {
  toComment?: IComment
  reply?: IComment
  closeReplyBox?: () => void
}

const EditBox: React.FC<IProps> = ({ toComment, reply, closeReplyBox }) => {
  const [avatar, setAvatar] = useState(null)
  const [qq, setQQ] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')
  const [comment, setComment] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const article: IArticle = useSelector((state) => state.article.article)
  const getCommentList = useSelector((state) => state.article.getCommentList)

  const emojiClickCallback = (emoji) => {
    setComment(comment + emoji)
  }

  const isReply = !!reply

  const publishComment = useMemoizedFn(async () => {
    if (!comment) {
      message.warning('请先输入评论内容')
      return
    }
    const res = await addComment({
      articleId: article._id,
      commentId: toComment?._id || '',
      replyId: reply?._id || '',
      avatar,
      qq,
      nickname: username,
      email,
      url: link,
      date: Date.now(),
      comment,
    })
    if (res && res.id) {
      message.success('评论成功')
      getCommentList()
      setAvatar('')
      setQQ('')
      setUserName('')
      setEmail('')
      setLink('')
      setComment('')
      setShowPreview(false)
      closeReplyBox()
    }
  })

  return (
    <div className={styles.editBox}>
      {isReply && <ReplyBox name={reply.nickname || '匿名用户'} />}
      <div className={styles.contentBox}>
        <div className={styles.avatarBox}>
          <Avatar avatar={avatar} />
        </div>
        <div className={styles.editInputBox}>
          <InfoBox
            username={username}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
            link={link}
            setLink={setLink}
            setAvatar={setAvatar}
            setQQ={setQQ}
          />
          <TextAreaBox comment={comment} setComment={setComment} />
          <CommentBtns
            isReply={isReply}
            closeReplyBox={closeReplyBox}
            emojiClickCallback={emojiClickCallback}
            showPreview={showPreview}
            setShowPreview={setShowPreview}
            publishComment={publishComment}
          />
          {showPreview && <PreviewBox content={comment} />}
        </div>
      </div>
    </div>
  )
}

EditBox.defaultProps = {
  toComment: null,
  reply: null,
  closeReplyBox: null,
}

export default EditBox
