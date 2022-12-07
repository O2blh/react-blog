import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { IArticle } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getArticlesByClassify, getArticlesByTag, getAllArticle } from '@/request/api'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './index.module.css'

interface IProps {
  articles: Array<IArticle>
}

const ClaDetail: NextPage<IProps> = ({ articles }) => {
  const router = useRouter()
  const { classify } = router.query
  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | ${classify}`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>{classify}</div>
      <div className={styles.content}>
        {articles.map((article) => {
          return (
            <Link key={article._id} href={`/posts/${article._id}`} passHref>
              <a href={`/posts/${article._id}`} className={styles.articleTitle} target='_blank' rel='noreferrer'>
                <span>{article.articleTitle}</span>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ClaDetail

export const getServerSideProps: GetServerSideProps = async (context) => {
  let classify = ''
  let tag = ''
  if (context.query.classify) {
    classify = decodeURIComponent(String(context.query.classify))
  }
  if (context.query.tag) {
    tag = decodeURIComponent(String(context.query.tag))
  }
  let articles = []
  if (classify) {
    articles = await getArticlesByClassify(classify)
  } else if (tag) {
    articles = await getArticlesByTag(tag)
  } else {
    articles = await getAllArticle()
  }

  return {
    props: {
      articles,
    },
  }
}
