import React, { useRef } from 'react'
import classNames from 'classnames'
import { useKeyPress, useMemoizedFn } from 'ahooks'

import styles from './style.module.css'

interface IProps {
  username: string
  setUserName: (string) => void
  email: string
  setEmail: (string) => void
  link: string
  setLink: (string) => void
  setAvatar: (string) => void
  setQQ: (string) => void
}

const InfoBox: React.FC<IProps> = ({ username, setUserName, email, setEmail, link, setLink, setAvatar, setQQ }) => {
  const nameRef = useRef(null)
  const handleName = useMemoizedFn(() => {
    const regQQ = /[1-9][0-9]{4,11}/
    if (regQQ.test(username)) {
      const avatarUrl = `https://q1.qlogo.cn/g?b=qq&nk=${username}&s=100`
      const QQEmail = `${username}@qq.com`
      setEmail(QQEmail)
      setAvatar(avatarUrl)
      setQQ(username)
      setUserName('')
    }
  })

  useKeyPress(13, handleName, {
    target: nameRef,
  })

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
          onBlur={handleName}
          ref={nameRef}
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
