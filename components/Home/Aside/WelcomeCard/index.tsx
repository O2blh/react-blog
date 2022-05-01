import React from 'react'
import Card from '@/components/Card'

import styles from './style.module.css'

const WelcomeCard = () => {
  return (
    <Card className={styles.card}>
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
    </Card>
  )
}

export default WelcomeCard
