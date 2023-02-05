import { IArticle } from '@/interface'
import React from 'react'

import styles from './index.module.css'

interface IProps {
  article: IArticle
}

const Item: React.FC<IProps> = ({ article }) => {
  return <div className={styles.item}>{article.articleTitle}</div>
}

export default Item
