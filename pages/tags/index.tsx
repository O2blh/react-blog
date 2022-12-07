import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { ITag } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getTags } from '@/request/api'
import Link from 'next/link'

import styles from './index.module.css'

interface IProps {
  tags: Array<ITag>
}

const Tags: NextPage<IProps> = ({ tags }) => {
  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 标签`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>标签</div>
      <div className={styles.content}>
        {tags.map((tag) => {
          const encodeStr = encodeURIComponent(tag.tag)
          return (
            <Link key={tag._id} href={`/claDetail?tag=${encodeStr}`} passHref>
              <a href={`/claDetail?tag=${encodeStr}`} className={styles.tag}>
                <span>{tag.tag}</span>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Tags

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tags = await getTags()
  return {
    props: {
      tags,
    },
  }
}
