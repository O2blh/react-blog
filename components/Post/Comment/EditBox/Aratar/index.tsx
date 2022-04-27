import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import styles from './style.module.css'

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <UserOutlined />
    </div>
  )
}

export default Avatar
