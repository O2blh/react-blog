import React, { useState } from 'react'
import Emoji from '../../../Emoji'
import styles from './style.module.css'
import Avatar from './Aratar'
import ReplyBox from './ReplyBox'
import InfoBox from './InfoBox'
import TextAreaBox from './TextAreaBox'
import CommentBtns from './CommentBtns'

interface IUser {
  _id: string
  name: string
  email: string
}

interface IProps {
  replyPerson?: IUser
  closeReplyBox?: any
}

const EditBox: React.FC<IProps> = ({ replyPerson, closeReplyBox }) => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')
  const [comment, setComment] = useState('')

  const emojiClickCallback = (emoji) => {
    setComment(comment + emoji)
  }

  const isReply = !!replyPerson

  return (
    <div className={styles.editBox}>
      {replyPerson && <ReplyBox name={replyPerson.name} />}
      <div className={styles.contentBox}>
        <div className={styles.avatarBox}>
          <Avatar avatar={null} />
        </div>
        <div className={styles.editInputBox}>
          <InfoBox
            username={username}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
            link={link}
            setLink={setLink}
          />
          <TextAreaBox comment={comment} setComment={setComment} />
          <CommentBtns isReply={isReply} closeReplyBox={closeReplyBox} emojiClickCallback={emojiClickCallback} />
        </div>
      </div>
    </div>
  )
}

EditBox.defaultProps = {
  replyPerson: null,
  closeReplyBox: null,
}

export default EditBox
