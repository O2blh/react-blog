import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SITE_NAME } from '@/constants/siteInfo'
import { GetServerSideProps } from 'next'
import { getArticlesPagination } from '@/request/api'
import { IArticle } from '@/interface'
import Router from 'next/router'
import List from './List'

import styles from './index.module.css'

interface IProps {
  articles: Array<IArticle>
  total: number
}

const PAGE_SIZE = 10
let CURRENT = 1
let KEYWORD = ''

const Articles: NextPage<IProps> = ({ articles, total }) => {
  const onPageChange = (page) => {
    CURRENT = page
    Router.push({ pathname: '/articles', query: { page: CURRENT, keyword: KEYWORD } })
  }

  const onKeywordChange = (keyword) => {
    KEYWORD = encodeURIComponent(keyword)
    Router.push({ pathname: '/articles', query: { page: CURRENT, keyword: KEYWORD } })
  }

  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 所有文章`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>所有文章</div>
      <List
        articles={articles}
        total={total}
        pageSize={PAGE_SIZE}
        current={CURRENT}
        onPageChange={onPageChange}
        onKeywordChange={onKeywordChange}
      />
    </div>
  )
}

export default Articles

export const getServerSideProps: GetServerSideProps = async (context) => {
  const options = {
    page: 1,
    limit: PAGE_SIZE,
    keyword: '',
  }
  if (context.query.page) {
    options.page = Number(context.query.page)
    CURRENT = options.page
  }
  if (context.query.keyword) {
    options.keyword = String(context.query.keyword)
  }
  const result = await getArticlesPagination(options)
  return {
    props: {
      articles: result.data,
      total: result.total,
    },
  }
}
