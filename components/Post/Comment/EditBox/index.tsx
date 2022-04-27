import React, { useState } from 'react'
import classNames from 'classnames'
import Emoji from './Emoji'
import styles from './style.module.css'
import Avatar from './Aratar'

const EditBox = () => {
  const [comment, setComment] = useState('')

  const emojiClickCallback = (emoji) => {
    setComment(comment + emoji)
  }

  return (
    <div className={styles.editBox}>
      <div className={styles.avatarBox}>
        <Avatar />
      </div>
      <div className={styles.editInputBox}>
        <div className={styles.inputBox}>
          <div className={classNames(styles.inputItem, styles.flex2)}>
            <div className={styles.inputKey}>昵称</div>
            <input className={styles.inputVal} type='text' placeholder='QQ号' />
          </div>
          <div className={classNames(styles.inputItem, styles.flex3)}>
            <div className={styles.inputKey}>邮箱</div>
            <input className={styles.inputVal} type='text' placeholder='必填' />
          </div>
          <div className={classNames(styles.inputItem, styles.flex3)}>
            <div className={styles.inputKey}>网址</div>
            <input className={styles.inputVal} type='text' placeholder='必填' />
          </div>
        </div>
        <div className={styles.textareaBox}>
          <textarea
            className={styles.textarea}
            placeholder='写点什么吗?支持markdown格式!
可以在「昵称」处填写QQ号,自动获取「头像」和「QQ邮箱」!'
            value={comment}
            onInput={(e) => {
              setComment(e.target.value)
            }}
          />
        </div>
        <div className={styles.commentBtns}>
          <Emoji emojiClickCallback={emojiClickCallback} />
          <div className={styles.previewBtn}>预览</div>
          <div className={styles.sendBtn}>发布</div>
        </div>
      </div>
    </div>
  )
}

export default EditBox
