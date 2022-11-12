import type { NextPage } from 'next'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Router from 'next/router'
import { SITE_NAME } from '@/constants/siteInfo'
import { getArticlesPagination, getClassifies, getTags, getNotice } from '@/request/api'
import { IArticle, IClassify, ITag, INotice } from '@/interface'

import HomeTitle from '@/components/Home/HomeTitle'
import Section from '@/components/Home/Section'
import Aside from '@/components/Home/Aside'
import styles from './index.module.css'

interface IProps {
  articles: Array<IArticle>
  classifies: Array<IClassify>
  tags: Array<ITag>
  notice: INotice
}

const PAGE_SIZE = 10
let CURRENT = 1

const Home: NextPage<IProps> = ({ articles, classifies, tags, notice }) => {
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
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeTitle />
      <div className={styles.body}>
        <Section
          articles={articles}
          classifies={classifies}
          pageSize={PAGE_SIZE}
          current={CURRENT}
          onPageChange={onPageChange}
        />
        <Aside total={total} classifies={classifies} tags={tags} notice={notice} />
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
