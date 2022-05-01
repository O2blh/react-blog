import React from 'react'
import MyPagination from '@/components/MyPagination'
import { IArticle, IClassify } from '@/interface'
import ArticleCard from './ArticleCard'

import styles from './style.module.css'

interface IProps {
  articles: Array<IArticle>
  classifies: Array<IClassify>
  pageSize: number
  current: number
  onPageChange: any
}

const Section: React.FC<IProps> = ({ articles, classifies, pageSize, current, onPageChange }) => {
  const total = classifies.reduce((prev, cur) => {
    return prev + cur.count
  }, 0)
  return (
    <section className={styles.section}>
      <ArticleCard articles={articles} />
      <MyPagination total={total} onPageChange={onPageChange} pageSize={pageSize} current={current} />
    </section>
  )
}

export default Section
