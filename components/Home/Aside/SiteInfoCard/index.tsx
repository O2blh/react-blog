import React from 'react'
import Card from '@/components/Card'
import styles from './style.module.css'

const SiteInfoCard = () => {
  return (
    <Card className={styles.card}>
      <div className={styles.info}>
        <span>总浏览量</span>
        <span>6560次</span>
      </div>
      <div className={styles.info}>
        <span>运行时间</span>
        <span>300天</span>
      </div>
    </Card>
  )
}

export default SiteInfoCard
