import React from 'react'

import styles from './style.module.css'

interface IProps {
  name: string
}

const ReplyBox: React.FC<IProps> = ({ name }) => {
  return (
    <div className={styles.replyNameBox}>
      回复给「
      <span className={styles.replyName}>{name}</span>
      」：
    </div>
  )
}

export default ReplyBox
