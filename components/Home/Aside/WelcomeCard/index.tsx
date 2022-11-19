import React from 'react'
import Card from '@/components/Card'

import styles from './style.module.css'

const WelcomeCard = () => {
  return (
    <Card className={styles.card}>
      <p className={styles.welcome}>
        下午好,
        <br />
        我叫<span className={styles.strong}>暴走</span>,
        <br />
        欢迎来到我
        <br />
        我的<span className={styles.strong}>个人博客</span>
      </p>
      {/* <Image
        className={styles.avatar}
        src='https://images-1310355014.cos.ap-nanjing.myqcloud.com/blog/avatar_t.JPG'
        width={200}
        height={200}
        alt=''
      /> */}
      <img className={styles.avatar} src='/avatar.png' />
    </Card>
  )
}

export default WelcomeCard
