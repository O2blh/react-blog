import React from 'react'
import Card from '@/components/Card'
import styles from './style.module.css'

const StatisticsCard = ({ articleCount, classifyCount, tagCount }) => {
  return (
    <Card className={styles.card}>
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
    </Card>
  )
}

export default StatisticsCard
