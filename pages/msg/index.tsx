import React, { useState } from 'react'
import type { NextPage } from 'next'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getMsgs, addMsg } from '@/request/api'
import Comment from '@/components/Post/Comment'
import { useMount } from 'ahooks'
import styles from './index.module.css'

const Msg: NextPage = () => {
  const [msgList, setMsgList] = useState([])
  const getMsgList = async () => {
    const res = await getMsgs()
    if (res) {
      setMsgList(res)
    }
  }

  const addMsgFunc = async (comment) => {
    const res = await addMsg(comment)
    return res
  }

  useMount(() => {
    getMsgList()
  })

  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 留言板`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>留言板</div>
      <div className={styles.content}>
        <div className={styles.desc}>
          傍晚好，我叫<span className={styles.strong}>暴走</span>，
          <br /> 欢迎来到我的博客! <br />
          可以在这里留言、吐槽，
          <br />
          <span className={styles.strong}>交换友链。</span>
        </div>
        <div className={styles.link}>
          <span className={styles.linkTitle}>本站链接：</span>
          <br />
          name: 暴走
          <br />
          link: http://www.baolh.top/
          <br />
          descr: 努力活着而已。
        </div>
        <Comment commentList={msgList} getCommentList={getMsgList} addComment={addMsgFunc} />
      </div>
    </div>
  )
}

export default Msg
