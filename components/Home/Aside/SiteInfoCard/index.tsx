import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'

import dayjs from 'dayjs'
import { SITE_RUN_TIME } from '@/constants/siteInfo'
import { getSiteAccessCount } from '@/request/api'

import styles from './style.module.css'

const SiteInfoCard = () => {
  const runDays = dayjs().diff(dayjs(SITE_RUN_TIME), 'day')
  const [count, setCount] = useState(0)
  const getAccessCount = async () => {
    try {
      const rs: any = await getSiteAccessCount()
      setCount(rs.count)
    } catch (e) {
      console.log('获取网站访问量出错', e)
    }
  }

  useEffect(() => {
    getAccessCount()
  }, [])

  return (
    <Card className={styles.card}>
      <div className={styles.info}>
        <span>总浏览量</span>
        <span>{count}次</span>
      </div>
      <div className={styles.info}>
        <span>运行时间</span>
        <span>{runDays}天</span>
      </div>
    </Card>
  )
}

export default SiteInfoCard
