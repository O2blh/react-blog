import React from 'react'
import { Pagination } from 'antd'
import styles from './style.module.css'

const MyPagination = () => {
  return (
    <div id='myPagination'>
      <Pagination className={styles.pagination} defaultCurrent={1} total={500} showSizeChanger={false} />
    </div>
  )
}

export default MyPagination
