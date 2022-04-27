import type { NextPage } from 'next'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { SITE_NAME } from '@/constants/siteInfo'
import usePoem from '@/hooks/usePoem'
import { getArticlesPagination, getClassifies, getTags, getNotice } from '@/request/api'
import { IArticle, IClassify, ITag, INotice } from '@/interface'

import ArticleCard from '@/components/Home/ArticleCard'
import WelcomeCard from '@/components/Home/WelcomeCard'
import LinkCard from '@/components/Home/LinkCard'
import StatisticsCard from '@/components/Home/StatisticsCard'
import NoticeCard from '@/components/Home/NoticeCard'
import ColckCard from '@/components/Home/ColckCard'
import TagsCard from '@/components/Home/TagsCard'
import SiteInfoCard from '@/components/Home/SiteInfoCard'
import MyPagination from '@/components/MyPagination'

import styles from '@/styles/index.module.css'

interface IProps {
  articles: Array<IArticle>
  classifies: Array<IClassify>
  tags: Array<ITag>
  notice: INotice
}

const PAGE_SIZE = 10
let CURRENT = 1

const Home: NextPage<IProps> = ({ articles, classifies, tags, notice }) => {
  const [poem] = usePoem()
  const onPageChange = (e) => {
    CURRENT = e
    Router.push({ pathname: '/', query: { page: e } })
  }
  const total = classifies.reduce((prev, cur) => {
    return prev + cur.count
  }, 0)
  return (
    <div className={styles.center}>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name='description' content='伊之助的博客' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.box}>
        <div className={styles.name}>{SITE_NAME}</div>
        <div className={styles.desc}>{poem?.content}</div>
      </div>
      <div className={styles.body}>
        <section className={styles.section}>
          <ArticleCard articles={articles} />
          <MyPagination total={total} onPageChange={onPageChange} pageSize={PAGE_SIZE} current={CURRENT} />
        </section>
        <aside className={styles.aside}>
          <WelcomeCard />
          <LinkCard />
          <StatisticsCard articleCount={total} classifyCount={classifies.length} tagCount={tags.length} />
          <NoticeCard notice={notice.notice} />
          <ColckCard />
          <TagsCard tags={tags} />
          <SiteInfoCard />
        </aside>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const options = {
    page: 1,
    limit: PAGE_SIZE,
  }
  if (context.query.page) {
    options.page = Number(context.query.page)
    CURRENT = options.page
  }
  const articles = await getArticlesPagination(options)
  const classifies = await getClassifies()
  const tags = await getTags()
  const notice = await getNotice()
  return {
    props: {
      articles,
      classifies,
      tags,
      notice,
    },
  }
}
