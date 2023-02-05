import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SITE_NAME } from '@/constants/siteInfo'
import { getArticlesPagination } from '@/request/api'
import { IArticle } from '@/interface'

import List from '@/components/Articles/List'

import styles from './index.module.css'

interface IProps {
  articles: Array<IArticle>
  total: number
}

const PAGE_SIZE = 10

const Articles: NextPage<IProps> = () => {
  const [keyword, setKeyword] = useState('')
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)

  const getData = async () => {
    const options = {
      page,
      limit: PAGE_SIZE,
      keyword,
    }
    const result = await getArticlesPagination(options)
    setArticles(result.data)
    setTotal(result.total)
  }

  useEffect(() => {
    getData()
  }, [page, keyword])

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
        current={page}
        onPageChange={(page) => {
          setPage(page)
        }}
        onKeywordChange={(keyword) => {
          setPage(1)
          setKeyword(keyword)
        }}
      />
    </div>
  )
}

export default Articles
