import React from 'react'
import classNames from 'classnames'
import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const StatisticsCard = ({ articleCount, classifyCount, tagCount }) => {
  return (
    <div className={classNames(cardStyles.card, styles.statistics)}>
      <div className={styles.item}>
        <span className={styles.title}>文章</span>
        <span className={styles.count}>{articleCount}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>分类</span>
        <span className={styles.count}>{classifyCount}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>标签</span>
        <span className={styles.count}>{tagCount}</span>
      </div>
    </div>
  )
}

export default StatisticsCard
