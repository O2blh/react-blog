import React from 'react'
import dayjs from 'dayjs'

import { IArticle } from '@/interface'
import styles from './style.module.css'

interface IProps {
  postData: IArticle
}

const PostTitle: React.FC<IProps> = ({ postData }) => {
  return (
    <div className={styles.box}>
      <div className={styles.title}>{postData.articleTitle}</div>
      <div className={styles.info}>
        <span className={styles.classify}>{postData.classify}</span>
        <span className={styles.publishDate}>{dayjs(postData.publishDate).format('YYYY-MM-DD hh:mm:ss')}</span>
      </div>
    </div>
  )
}

export default PostTitle
