import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { ISay } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getSays } from '@/request/api'
import Image from 'next/image'

import dayjs from 'dayjs'
import styles from './index.module.css'

interface IProps {
  sayList: Array<ISay>
}

const Say: NextPage<IProps> = ({ sayList }) => {
  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 说说`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>说说</div>
      <div className={styles.content}>
        {sayList.map((say) => {
          return (
            <div className={styles.say} key={say._id}>
              <div className={styles.avatar}>
                <Image src='/avatar.png' alt='' width={70} height={70} />
              </div>
              <div className={styles.sayContent}>
                {say.content}
                <div className={styles.sayTime}>{dayjs(say.updateDate).format('YYYY-MM-DD HH:mm:ss')}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Say

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sayList = await getSays()
  return {
    props: {
      sayList,
    },
  }
}
