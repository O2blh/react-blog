import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { IClassify } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getClassifies } from '@/request/api'
import Link from 'next/link'

import styles from './index.module.css'

interface IProps {
  classifies: Array<IClassify>
  total: number
}

const Classify: NextPage<IProps> = ({ classifies }) => {
  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 分类`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>分类</div>
      <div className={styles.content}>
        {classifies.map((classify) => {
          const encodeStr = encodeURIComponent(classify.classify)
          return (
            <Link key={classify._id} href={`/claDetail?classify=${encodeStr}`} passHref>
              <a href={`/claDetail?classify=${encodeStr}`} className={styles.classify}>
                <span>{classify.classify}</span>
                <span className={styles.count}>{classify.count}</span>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Classify

export const getServerSideProps: GetServerSideProps = async (context) => {
  const classifies = await getClassifies()
  return {
    props: {
      classifies,
    },
  }
}
