import React from 'react'

import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const NoticeCard = () => {
  return (
    <div className={cardStyles.card}>
      <div className={styles.notice}>我一定会回来的,我一定会回来的</div>
    </div>
  )
}

export default NoticeCard
