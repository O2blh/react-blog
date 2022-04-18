import React from 'react'
import { BackTop } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import styles from './style.module.css'

const BackToTop = () => {
  return (
    <BackTop duration={700} visibilityHeight={300} className={styles.backTop}>
      <VerticalAlignTopOutlined />
    </BackTop>
  )
}

export default BackToTop
