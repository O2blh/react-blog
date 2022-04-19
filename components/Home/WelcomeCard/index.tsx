import React from 'react'
import classNames from 'classnames'
import cardStyles from '@/styles/card.module.css'
import styles from './style.module.css'

const WelcomeCard = () => {
  return (
    <div className={classNames(cardStyles.card, styles.welcomeCard)}>
      <p className={styles.welcome}>
        下午好,
        <br />
        我叫<span className={styles.strong}>一只猪</span>,
        <br />
        欢迎来到
        <br />
        我的<span>个人博客。</span>
      </p>
      <img className={styles.avatar} src='https://images-1310355014.cos.ap-nanjing.myqcloud.com/blog%2Favatar.webp' />
    </div>
  )
}

export default WelcomeCard
