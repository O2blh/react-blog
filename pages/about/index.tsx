import React, { useEffect, useRef, useState } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { IAbout, IClassify } from '@/interface'
import { SITE_NAME } from '@/constants/siteInfo'
import Head from 'next/head'
import { getAbout, getClassifies } from '@/request/api'
import MySwitch from '@/components/MySwitch'
import classNames from 'classnames'
import * as echarts from 'echarts'
import MarkDown from '@/components/Post/MarkDown'

import styles from './index.module.css'

interface IProps {
  aboutList: Array<IAbout>
  classifies: Array<IClassify>
}

const Works: NextPage<IProps> = ({ aboutList, classifies }) => {
  const [cur, setCur] = useState(0)
  const myChart = useRef(null)

  const aboutMe = aboutList.find((item) => item.type === 1)
  const aboutSite = aboutList.find((item) => item.type === 0)

  const onChange = (checked) => {
    if (checked) {
      setCur(1)
    } else {
      setCur(0)
    }
  }

  useEffect(() => {
    if (!myChart.current) {
      myChart.current = echarts.init(document.getElementById('classChart'))
    }
    const data = classifies.map((cla) => {
      return {
        value: cla.count,
        name: cla.classify,
      }
    })
    const option = {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          type: 'pie',
          radius: '80%',
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            fontSize: 18,
            color: '#fff',
          },
        },
      ],
    }
    // 绘制图表
    myChart.current.setOption(option)
  }, [])

  return (
    <div className={styles.center}>
      <Head>
        <title>{`${SITE_NAME} | 关于`}</title>
        <meta name='description' content={`${SITE_NAME}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.title}>关于</div>
      <div className={styles.content}>
        <div className={styles.switchBox}>
          <span className={classNames(styles.text, cur === 0 ? styles.active : '')}>关于本站</span>
          <MySwitch onChange={onChange} />
          <span className={classNames(styles.text, cur === 1 ? styles.active : '')}> 关于我</span>
        </div>

        <div className={styles.classify} style={{ display: cur === 0 ? 'block' : 'none' }}>
          <h3>📊文章分布</h3>
          <div id='classChart' className={styles.chartBox} />
        </div>

        <div className={styles.markedBox}>
          <MarkDown content={cur === 0 ? aboutSite.content : aboutMe.content} />
        </div>
      </div>
    </div>
  )
}

export default Works

export const getServerSideProps: GetServerSideProps = async (context) => {
  const aboutList = await getAbout()
  const classifies = await getClassifies()
  return {
    props: {
      aboutList,
      classifies,
    },
  }
}
