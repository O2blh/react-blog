import React from 'react'
import { IArticle } from '@/interface'
import Link from 'next/link'
import MyPagination from '@/components/MyPagination'
import Item from './Item'
import SearchBox from './SearchBox'

import styles from './index.module.css'

interface IProps {
  articles: Array<IArticle>
  total: number
  pageSize: number
  current: number
  onPageChange: any
  onKeywordChange: any
}

const List: React.FC<IProps> = ({ articles, total, pageSize, current, onPageChange, onKeywordChange }) => {
  return (
    <div className={styles.list}>
      <SearchBox onKeywordChange={onKeywordChange} />
      {articles.map((article) => {
        return (
          <Link key={article._id} href={`/posts/${article._id}`} passHref>
            <a href={`/posts/${article._id}`}>
              <Item article={article} />
            </a>
          </Link>
        )
      })}
      <MyPagination total={total} onPageChange={onPageChange} pageSize={pageSize} current={current} />
    </div>
  )
}

export default List
