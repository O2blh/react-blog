import React from 'react'
import { Pagination } from 'antd'
import styles from './style.module.css'

const MyPagination = ({ total = 0, onPageChange, pageSize, current }) => {
  return (
    <div id='myPagination'>
      <Pagination
        className={styles.pagination}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        onChange={onPageChange}
        current={current}
      />
    </div>
  )
}

export default MyPagination
