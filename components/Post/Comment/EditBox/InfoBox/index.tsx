import React from 'react'
import classNames from 'classnames'

import styles from './style.module.css'

const InfoBox = ({ username, setUserName, email, setEmail, link, setLink }) => {
  return (
    <div className={styles.inputBox}>
      <div className={classNames(styles.inputItem, styles.flex2)}>
        <div className={styles.inputKey}>昵称</div>
        <input
          className={styles.inputVal}
          type='text'
          placeholder='QQ号'
          value={username}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
      </div>
      <div className={classNames(styles.inputItem, styles.flex3)}>
        <div className={styles.inputKey}>邮箱</div>
        <input
          className={styles.inputVal}
          type='text'
          placeholder='必填'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <div className={classNames(styles.inputItem, styles.flex3)}>
        <div className={styles.inputKey}>网址</div>
        <input
          className={styles.inputVal}
          type='text'
          placeholder='必填'
          value={link}
          onChange={(e) => {
            setLink(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default InfoBox
