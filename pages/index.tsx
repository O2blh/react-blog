import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/index.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.center}>
      <Head>
        <title>伊之助</title>
        <meta name='description' content='伊之助的博客' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.box}>
        <div className={styles.title}>伊之助的博客</div>
        <div className={styles.desc}>千山鸟飞绝, 万径人踪灭。</div>
      </div>
      <div className={styles.body} />
    </div>
  )
}

export default Home
