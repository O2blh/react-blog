import React from 'react'
import classNames from 'classnames'
import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const ArticleCard = () => {
  return (
    <div className={classNames(cardStyles.card, styles.article)}>
      <div className={styles.title}>ES6 学习笔记</div>
      <p className={styles.content}>
        ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记S6 学习笔记ES6 学习笔记ES6
        学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记S6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6
        学习笔记ES6 学习笔记ES6 学习笔记S6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6
        学习笔记S6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记S6 学习笔记ES6
        学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记ES6 学习笔记
      </p>
      <div className={styles.info}>
        <span className={classNames(styles.tag, styles.date)}>2022-04-19</span>
        <span className={styles.tag}>ES6</span>
        <span className={styles.tag}>Proxy</span>
      </div>
    </div>
  )
}

export default ArticleCard
