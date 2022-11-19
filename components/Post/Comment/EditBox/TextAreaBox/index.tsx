import React from 'react'

import styles from './style.module.css'

const TextAreaBox = ({ comment, setComment }) => {
  return (
    <div className={styles.textareaBox}>
      <textarea
        className={styles.textarea}
        placeholder='写点什么吗?支持markdown格式!
可以在「昵称」处填写QQ号,自动获取「头像」和「QQ邮箱」!'
        value={comment}
        onChange={(e) => {
          setComment(e.target.value)
        }}
      />
    </div>
  )
}

export default TextAreaBox
