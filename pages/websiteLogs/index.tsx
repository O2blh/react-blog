import React, { useMemo } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { ISiteLog } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getWebSiteLog } from '@/request/api'
import MyTimeline from '@/components/MyTimeLine'
import dayjs from 'dayjs'
import styles from './index.module.css'

interface IProps {
  logList: Array<ISiteLog>
}

const FriendLink: NextPage<IProps> = ({ logList }) => {
  const data = useMemo(() => {
    // logList.sort((a, b) => {
    //   return a.logDate - b.logDate
    // })
    const logMap = logList.map((log) => {
      return {
        date: dayjs(log.logDate).format('YYYY-MM-DD'),
        content: log.content,
      }
    })
    const res = []
    logMap.forEach((log) => {
      const temp = res.find((item) => item.date === log.date)
      if (temp) {
        temp.siteLogList.push(log)
      } else {
        res.push({
          date: log.date,
          siteLogList: [log],
        })
      }
    })
    return res
  }, [logList])

  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 建站日志`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>建站日志</div>
      <div className={styles.content}>
        {data.map((item) => {
          return <MyTimeline key={item.date} siteLogList={item.siteLogList} date={item.date} />
        })}
      </div>
    </div>
  )
}

export default FriendLink

export const getServerSideProps: GetServerSideProps = async (context) => {
  const logList = await getWebSiteLog()
  return {
    props: {
      logList,
    },
  }
}
