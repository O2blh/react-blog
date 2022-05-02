import React from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import Link from 'next/link'
import Card from '@/components/Card'
import { IArticle } from '@/interface'
import styles from './style.module.css'

interface IProps {
  articles: Array<IArticle>
}

const ArticleCard: React.FC<IProps> = ({ articles }) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <Link key={article._id} href={`/posts/${article._id}`} passHref>
            <a href={`/posts/${article._id}`}>
              <Card className={styles.card}>
                <div className={styles.title}>{article.articleTitle}</div>
                <p className={styles.content}>
                  {article.articleContent.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
                </p>
                <div className={styles.info}>
                  <span className={classNames(styles.tag, styles.date)}>
                    {dayjs(article.modifyDate).format('YYYY-MM-DD')}
                  </span>
                  {article.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </a>
          </Link>
        )
      })}
    </>
  )
}

export default ArticleCard
