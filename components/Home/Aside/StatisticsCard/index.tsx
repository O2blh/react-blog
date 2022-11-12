import React from 'react'
import Card from '@/components/Card'
import Link from 'next/link'
import ROUTES from '@/constants/routes'

import styles from './style.module.css'

const StatisticsCard = ({ articleCount, classifyCount, tagCount }) => {
  return (
    <Card className={styles.card}>
      <Link href={ROUTES.ARTICLES} passHref>
        <a href={ROUTES.ARTICLES} className={styles.item}>
          <span className={styles.title}>文章</span>
          <span className={styles.count}>{articleCount}</span>
        </a>
      </Link>
      <Link href={ROUTES.CLASSIFY} passHref>
        <a href={ROUTES.CLASSIFY} className={styles.item}>
          <span className={styles.title}>分类</span>
          <span className={styles.count}>{classifyCount}</span>
        </a>
      </Link>
      <Link href={ROUTES.TAGS} passHref>
        <a href={ROUTES.TAGS} className={styles.item}>
          <span className={styles.title}>标签</span>
          <span className={styles.count}>{tagCount}</span>
        </a>
      </Link>
    </Card>
  )
}

export default StatisticsCard
