import React from 'react'

import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const SiteInfoCard = () => {
  return (
    <div className={cardStyles.card}>
      <div className={styles.info}>
        <span>总浏览量</span>
        <span>6560次</span>
      </div>
      <div className={styles.info}>
        <span>运行时间</span>
        <span>300天</span>
      </div>
    </div>
  )
}

export default SiteInfoCard
