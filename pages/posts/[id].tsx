import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { SITE_NAME } from '@/constants/siteInfo'
import { getAllArticleId, getArticleById, getComments, addComment } from '@/request/api'
import { NextPage, GetStaticProps } from 'next'
import { IArticle, IComment } from '@/interface'
import MarkDown from '@/components/Post/MarkDown'
import PostTags from '@/components/Post/PostTags'
import CopyRight from '@/components/Post/CopyRight'
import Comment from '@/components/Post/Comment'
import NavBar from '@/components/Post/Navbar'
import PostTitle from '@/components/Post/PostTitle'

import styles from './style.module.css'

interface IProps {
  article: IArticle
}

const Post: NextPage<IProps> = ({ article }) => {
  const [commentList, setCommentList] = useState<Array<IComment>>([])

  const getCommentList = async () => {
    const res = await getComments(article._id)
    if (res) {
      setCommentList(res)
    }
  }

  useEffect(() => {
    if (article._id) {
      getCommentList()
    }
  }, [article._id])

  const publishComment = async (comment) => {
    const res = await addComment({
      articleId: article._id,
      ...comment,
    })
    return res
  }

  const [url, setUrl] = useState('')
  useEffect(() => {
    if (window) {
      setUrl(window.location.origin + window.location.pathname)
    }
  }, [])

  return (
    <div className={styles.center}>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <PostTitle postData={article} />
      <div className={styles.card}>
        <MarkDown content={article.articleContent} className={styles.mb} />
        <PostTags tags={article.tags} />
        <CopyRight title={article.articleTitle} link={url} />
        <Comment commentList={commentList} getCommentList={getCommentList} addComment={publishComment} />
        <NavBar content={article.articleContent} />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllArticleId()
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params, preview, previewData } = context
  console.log(context)
  const postData = await getArticleById(params.id)
  return {
    props: {
      article: postData[0],
    },
    revalidate: 10,
  }
}

export default Post
