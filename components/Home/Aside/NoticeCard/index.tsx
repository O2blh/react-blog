import React from 'react'
import Card from '@/components/Card'
import styles from './style.module.css'

const NoticeCard = ({ notice }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.notice}>{notice}</div>
    </Card>
  )
}

export default NoticeCard
