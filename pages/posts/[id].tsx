import React from 'react'
import Head from 'next/head'
import { SITE_NAME } from '@/constants/siteInfo'
import { getAllArticleId, getArticleById } from '@/request/api'
import dayjs from 'dayjs'
import { NextPage } from 'next'
import { IArticle } from '@/interface'

import MarkDown from '@/components/Post/MarkDown'
import PostTags from '@/components/Post/PostTags'
import CopyRight from '@/components/Post/CopyRight'
import Comment from '@/components/Post/Comment'
import NavBar from '@/components/Post/Navbar'
import styles from './style.module.css'

interface IProps {
  postData: IArticle
}

const Post: NextPage<IProps> = ({ postData }) => {
  return (
    <div className={styles.center}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <div className={styles.box}>
        <div className={styles.title}>{postData.articleTitle}</div>
        <div className={styles.info}>
          <span className={styles.classify}>{postData.classify}</span>
          <span className={styles.publishDate}>{dayjs(postData.publishDate).format('YYYY-MM-DD hh:mm:ss')}</span>
        </div>
      </div>
      <div className={styles.card}>
        <MarkDown content={postData.articleContent} className={styles.mb} />
        <PostTags tags={postData.tags} />
        <CopyRight title={postData.articleTitle} link='http://localhost:3000/posts/1fee1e97625a6ff3003bf0ae43cc9448' />
        <Comment />
        <NavBar content={postData.articleContent} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllArticleId()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getArticleById(params.id)
  return {
    props: {
      postData: postData[0],
    },
  }
}

export default Post
