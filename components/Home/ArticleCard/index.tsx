import React from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'
import Link from 'next/link'
import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const ArticleCard = ({ articles }) => {
  return (
    <>
      {articles.map((article) => {
        return (
          <Link key={article._id} href={`/posts/${article._id}`}>
            <div className={classNames(cardStyles.card, styles.article)}>
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
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default ArticleCard
