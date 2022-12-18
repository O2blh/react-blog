import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { IWork } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getWorks } from '@/request/api'
import Link from 'next/link'
import styles from './index.module.css'

interface IProps {
  workList: Array<IWork>
}

const Works: NextPage<IProps> = ({ workList }) => {
  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 作品`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>我的作品</div>
      <div className={styles.content}>
        {workList.map((work) => {
          return (
            <Link key={work._id} href={work.url}>
              <a
                href={work.url}
                className={styles.work}
                style={{ backgroundImage: `url('${work.cover}')` }}
                target='_blank'
                rel='noreferrer'
              >
                <div className={styles.workTitle}>{work.name}</div>
                <div className={styles.split} />
                <div className={styles.desc}>{work.desc}</div>
                <div className={styles.mask} />
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Works

export const getServerSideProps: GetServerSideProps = async (context) => {
  const workList = await getWorks()
  return {
    props: {
      workList,
    },
  }
}
