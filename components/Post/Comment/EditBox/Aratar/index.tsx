import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import styles from './style.module.css'

const Avatar = ({ avatar }) => {
  return <div className={styles.avatar}>{avatar ? <img src={avatar} width={70} height={70} /> : <UserOutlined />}</div>
}

export default Avatar
