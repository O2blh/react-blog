import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import styles from './style.module.css'

const Avatar = ({ avatar }) => {
  return <div className={styles.avatar}>{avatar ? null : <UserOutlined />}</div>
}

export default Avatar
