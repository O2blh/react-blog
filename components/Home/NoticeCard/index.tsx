import React from 'react'

import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const NoticeCard = ({ notice }) => {
  return (
    <div className={cardStyles.card}>
      <div className={styles.notice}>{notice}</div>
    </div>
  )
}

export default NoticeCard
