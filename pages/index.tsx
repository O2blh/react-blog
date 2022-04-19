import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/index.module.css'
import ArticleCard from '@/components/Home/ArticleCard'
import WelcomeCard from '@/components/Home/WelcomeCard'

const Home: NextPage = () => {
  return (
    <div className={styles.center}>
      <Head>
        <title>伊之助</title>
        <meta name='description' content='伊之助的博客' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.box}>
        <div className={styles.name}>伊之助的博客</div>
        <div className={styles.desc}>千山鸟飞绝, 万径人踪灭。</div>
      </div>
      <div className={styles.body}>
        <section className={styles.section}>
          <ArticleCard />
        </section>
        <aside className={styles.aside}>
          <WelcomeCard />
        </aside>
      </div>
    </div>
  )
}

export default Home
