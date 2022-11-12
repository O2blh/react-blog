import React from 'react'
import Icon from '@ant-design/icons/lib/components/Icon'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import Card from '@/components/Card'
import { Popover } from 'antd'
import Image from 'next/image'

import styles from './style.module.css'

const CsdnSvg = () => (
  <svg viewBox='0 0 1024 1024' width='1em' height='1em' fill='currentColor'>
    <path
      d='M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z'
      fill='#e6e6e6'
      p-id='3252'
    />
  </svg>
)

const CsdnIcon = (props) => <Icon component={CsdnSvg} {...props} />

const LinkCard = () => {
  return (
    <Card className={styles.card}>
      <a href='https://gitee.com/bao-longhui/react-blog' target='_blank' rel='noreferrer' className={styles.icon}>
        <GithubOutlined />
      </a>
      <a href='https://gitee.com/bao-longhui/react-blog' target='_blank' rel='noreferrer' className={styles.icon}>
        <Icon component={CsdnIcon} />
      </a>
      <Popover
        title={null}
        content={
          <div className={styles.qrcode}>
            <Image src='/qq_qrcode.JPG' width={300} height={450} alt='' />
          </div>
        }
        placement='bottom'
      >
        <div className={styles.icon}>
          <QqOutlined />
        </div>
      </Popover>
      <Popover
        title={null}
        content={
          <div className={styles.qrcode}>
            <Image src='/wx_qrcode.JPG' width={300} height={406} alt='' />
          </div>
        }
        placement='bottom'
      >
        <div className={styles.icon}>
          <WechatOutlined />
        </div>
      </Popover>
    </Card>
  )
}

export default LinkCard
